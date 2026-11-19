import { BRANCHES, PROJECTS, LOG, STACK, STATS, MARQUEE1, MARQUEE2, ACCENTS } from './data.js';

const $ = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const root = document.documentElement;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
function el(tag, cls, html){ const e=document.createElement(tag); if(cls) e.className=cls; if(html!=null) e.innerHTML=html; return e; }
const clamp = (v,a,b)=>Math.min(b,Math.max(a,v));

/* ---------- contenido ---------- */
[["m1",MARQUEE1],["m2",MARQUEE2]].forEach(([id,arr])=>{
  const t=$("#"+id); for(let n=0;n<4;n++) arr.forEach(x=>t.append(el("span",null,x)));
});

const statsEl=$("#stats");
STATS.forEach(s=>{
  const d=el("div","stat"); const n=el("div","num"); n.setAttribute("aria-label",s.v); n.dataset.v=s.v;
  [...s.v].forEach(ch=>{
    const dg=el("span","digit"); dg.setAttribute("aria-hidden","true"); const col=el("span","col"); col.dataset.t=ch;
    for(let i=0;i<10;i++) col.append(el("span",null,i));
    dg.append(col); n.append(dg);
  });
  d.append(n, el("p",null,s.l)); statsEl.append(d);
});

const stackEl=$("#stackcards");
Object.entries(BRANCHES).forEach(([k,b],i)=>{
  const card=el("article","sc"); card.id="rama-"+k; card.style.setProperty("--c",b.color); card.style.setProperty("--i",i);
  const inn=el("div","sc-in");
  const head=el("div"); head.append(el("p","tag",b.meta), el("h3",null,b.title), el("p","intro",b.intro));
  const list=el("ul","rows");
  b.items.forEach(it=>{
    const li=el("li"); li.append(el("h4",null,it.t), el("p",null,it.p));
    const tg=el("div","tags"); it.tags.forEach(x=>tg.append(el("span",null,x))); li.append(tg);
    if(it.demo) li.append(el("p","demo","Ejemplo: sustitúyelo por tu proyecto"));
    list.append(li);
  });
  inn.append(head,list); card.append(inn); stackEl.append(card);
});

/* ---------- proyectos ---------- */
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const initials = t => t.replace(/\(ejemplo\)/i,"").trim().split(/\s+/).slice(0,2).map(w=>w[0]||"").join("").toUpperCase();
function cover(p, big){
  if(p.cover) return `<img src="${esc(p.cover)}" alt="Captura de ${esc(p.title)}" loading="lazy">`;
  const note = p.ejemplo ? (big?"ejemplo · añade una imagen":"ejemplo · añade captura") : (big?"sin captura · añade una imagen":"sin captura");
  return `<span class="pj-ph" aria-hidden="true">${esc(initials(p.title))}</span><span class="pj-ph-note">${note}</span>`;
}
function links(p){
  let out="";
  if(p.demo) out+=`<a class="pj-link" href="${esc(p.demo)}" target="_blank" rel="noopener" data-stop>Demo ↗</a>`;
  if(p.code) out+=`<a class="pj-link" href="${esc(p.code)}" target="_blank" rel="noopener" data-stop>Código ↗</a>`;
  return out;
}
const projgrid=$("#projgrid");
PROJECTS.forEach(p=>{
  const c=el("article","pj"+(p.cover?"":" no-cover")); c.tabIndex=0; c.dataset.id=p.id;
  c.setAttribute("role","button"); c.setAttribute("aria-label","Ver detalle de "+p.title.replace(/\(ejemplo\)/i,"").trim());
  c.innerHTML=`
    <div class="pj-cover">${cover(p)}</div>
    <div class="pj-main">
      <div class="pj-top"><h3>${esc(p.title.replace(/\s*\(ejemplo\)/i,""))}</h3>${p.ejemplo?'<span class="pj-eg">ejemplo</span>':''}</div>
      <p class="pj-tag">${esc(p.tagline)}</p>
      <div class="tags">${p.stack.slice(0,4).map(s=>`<span>${esc(s)}</span>`).join("")}</div>
    </div>
    <div class="pj-foot"><span class="pj-open">Ver detalle →</span><span class="pj-links">${links(p)}</span></div>`;
  projgrid.append(c);
});

/* panel de detalle */
const modal=$("#projModal"), pjBody=$("#pjBody"), pjClose=$("#pjClose");
let lastFocus=null;
function openProject(id){
  const p=PROJECTS.find(x=>x.id===id); if(!p) return;
  const gallery = (p.shots&&p.shots.length)
    ? `<div class="pj-shots">${p.shots.map(s=>`<img src="${esc(s)}" alt="Captura de ${esc(p.title)}" loading="lazy">`).join("")}</div>`
    : "";
  pjBody.innerHTML=`
    <div class="pj-detail-cover ${p.cover?"":"no-cover"}">${cover(p,true)}</div>
    <p class="pj-commit">commit ${esc(["#"+p.id, p.year, p.role].filter(Boolean).join(" · "))}</p>
    <h2 id="pjTitle">${esc(p.title.replace(/\s*\(ejemplo\)/i,""))}${p.ejemplo?'<span class="pj-eg">ejemplo</span>':''}</h2>
    <p class="pj-lead">${esc(p.tagline)}</p>
    <p class="pj-desc">${esc(p.p)}</p>
    ${p.highlights&&p.highlights.length?`<ul class="pj-high">${p.highlights.map(h=>`<li>${esc(h)}</li>`).join("")}</ul>`:""}
    <div class="tags">${p.stack.map(s=>`<span>${esc(s)}</span>`).join("")}</div>
    ${(p.demo||p.code)?`<div class="row">${p.demo?`<a class="btn" href="${esc(p.demo)}" target="_blank" rel="noopener">Ver demo ↗</a>`:""}${p.code?`<a class="btn ghost" href="${esc(p.code)}" target="_blank" rel="noopener">Ver código ↗</a>`:""}</div>`:""}
    ${gallery}`;
  lastFocus=document.activeElement;
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
  pjClose.focus();
}
function closeProject(){
  modal.classList.remove("open"); modal.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
  if(lastFocus) lastFocus.focus();
}
projgrid.addEventListener("click",e=>{
  if(e.target.closest("[data-stop]")) return;
  const card=e.target.closest(".pj"); if(card) openProject(card.dataset.id);
});
projgrid.addEventListener("keydown",e=>{
  if(e.key!=="Enter"&&e.key!==" ") return;
  const card=e.target.closest(".pj"); if(card&&!e.target.closest("[data-stop]")){ e.preventDefault(); openProject(card.dataset.id); }
});
pjClose.addEventListener("click",closeProject);
$$("[data-close]",modal).forEach(b=>b.addEventListener("click",closeProject));
addEventListener("keydown",e=>{
  if(e.key==="Escape"&&modal.classList.contains("open")) closeProject();
  if(e.key==="Tab"&&modal.classList.contains("open")){
    const f=$$('a[href],button',modal).filter(x=>x.offsetParent!==null);
    if(!f.length) return;
    const first=f[0], last=f[f.length-1];
    if(e.shiftKey&&document.activeElement===first){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey&&document.activeElement===last){ e.preventDefault(); first.focus(); }
  }
});

const log=$("#log");
LOG.forEach(e=>{
  const d=el("div","entry"); d.style.setProperty("--c",e.c); d.append(el("time",null,e.when));
  const b=el("div"); b.append(el("h3",null,e.t+(e.now?'<span class="badge">en curso</span>':"")), el("p",null,e.p));
  d.append(b); log.append(d);
});

const sg=$("#stackgrid");
STACK.forEach(s=>{
  const g=el("div","group"); g.style.setProperty("--c",s.c); g.append(el("h3",null,s.g));
  const w=el("div"); s.i.forEach(x=>w.append(el("span",null,x))); g.append(w); sg.append(g);
});

/* ---------- color de acento (tecla C) ---------- */
let accIdx=0;
function setAccent(i,notify){
  accIdx=i; const a=ACCENTS[i];
  root.style.setProperty("--accent",a.c); root.style.setProperty("--accent-rgb",a.rgb);
  if(notify){ const t=$("#toast"); t.textContent="Color de acento: "+a.n; t.classList.add("show"); clearTimeout(setAccent.t); setAccent.t=setTimeout(()=>t.classList.remove("show"),1400); }
}
const nextAccent=()=>setAccent((accIdx+1)%ACCENTS.length,true);
addEventListener("keydown",e=>{ if(e.key.toLowerCase()==="c" && !e.metaKey && !e.ctrlKey && !e.altKey) nextAccent(); });
$("#colorBtn").addEventListener("click",nextAccent);

/* ---------- menú ---------- */
const menu=$("#menu"), mbtn=$("#menuBtn");
function toggleMenu(open){
  menu.classList.toggle("open",open); mbtn.setAttribute("aria-expanded",String(open)); mbtn.textContent=open?"Cerrar":"Menú";
}
mbtn.addEventListener("click",()=>toggleMenu(!menu.classList.contains("open")));
$$("#menu a").forEach(a=>a.addEventListener("click",()=>toggleMenu(false)));
addEventListener("keydown",e=>{ if(e.key==="Escape") toggleMenu(false); });

/* ---------- scramble de texto ---------- */
const GLYPHS="<>/{}[]=+*#_01";
function scramble(node,final,dur=700){
  if(reduce){ node.textContent=final; return; }
  const start=performance.now();
  (function tick(now){
    const p=clamp((now-start)/dur,0,1); let out="";
    for(let i=0;i<final.length;i++){
      const ch=final[i];
      out += (ch===" "||i<final.length*p) ? ch : GLYPHS[(Math.random()*GLYPHS.length)|0];
    }
    node.textContent=out;
    if(p<1) requestAnimationFrame(tick); else node.textContent=final;
  })(start);
}
$$("#menu [data-scr]").forEach(a=>{ const f=a.textContent; a.addEventListener("mouseenter",()=>scramble(a,f,450)); });
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting) return; io.unobserve(e.target);
  const n=e.target;
  if(n.matches("h2[data-scr]")){ n.setAttribute("aria-label",n.textContent); scramble(n,n.textContent,800); }
}),{threshold:.6});
$$("h2[data-scr]").forEach(h=>io.observe(h));

/* ---------- contadores que ruedan ---------- */
const sio=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting) return; sio.unobserve(e.target);
  $$(".col",e.target).forEach((c,i)=>{ c.style.transitionDelay=(i*.12)+"s"; c.style.transform=`translateY(${-Number(c.dataset.t)}em)`; });
}),{threshold:.5});
sio.observe(statsEl);

/* ---------- cursor propio ---------- */
if(matchMedia("(hover:hover) and (pointer:fine)").matches && !reduce){
  root.classList.add("cur");
  const dot=$("#curDot"), ring=$("#curRing"), lab=$("#curLab");
  let tx=innerWidth/2, ty=innerHeight/2, rx=tx, ry=ty;
  addEventListener("pointermove",e=>{ tx=e.clientX; ty=e.clientY; dot.style.transform=`translate3d(${tx}px,${ty}px,0)`; },{passive:true});
  (function loop(){ rx+=(tx-rx)*.16; ry+=(ty-ry)*.16; ring.style.transform=`translate3d(${rx}px,${ry}px,0)`; requestAnimationFrame(loop); })();
  document.addEventListener("pointerover",e=>{
    const t=e.target.closest("[data-cursor]");
    if(t){ lab.textContent=t.dataset.cursor; ring.classList.add("big"); } else { ring.classList.remove("big"); }
  });
}

/* ---------- botones magnéticos, tilt y parallax ---------- */
if(!reduce){
  $$(".mag").forEach(b=>{
    b.addEventListener("pointermove",e=>{ const r=b.getBoundingClientRect(); b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.22}px,${(e.clientY-r.top-r.height/2)*.3}px)`; });
    b.addEventListener("pointerleave",()=>{ b.style.transform=""; });
  });
  $$(".group").forEach(g=>{
    g.addEventListener("pointermove",e=>{
      const r=g.getBoundingClientRect(), x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height;
      g.style.setProperty("--ry",((x-.5)*10)+"deg"); g.style.setProperty("--rx",((.5-y)*10)+"deg");
      g.style.setProperty("--gx",(x*100)+"%"); g.style.setProperty("--gy",(y*100)+"%");
    });
    g.addEventListener("pointerleave",()=>{ g.style.setProperty("--rx","0deg"); g.style.setProperty("--ry","0deg"); });
  });
  const hero=$("#inicio");
  hero.addEventListener("pointermove",e=>{
    const r=hero.getBoundingClientRect();
    hero.style.setProperty("--px",((e.clientX-r.left)/r.width-.5)*2);
    hero.style.setProperty("--py",((e.clientY-r.top)/r.height-.5)*2);
  });
  hero.addEventListener("pointerleave",()=>{ hero.style.setProperty("--px",0); hero.style.setProperty("--py",0); });
  addEventListener("pointermove",e=>{ document.body.style.setProperty("--mx",e.clientX+"px"); document.body.style.setProperty("--my",e.clientY+"px"); },{passive:true});
}

/* ---------- copiar correo ---------- */
$("#copyBtn").addEventListener("click",async()=>{
  const b=$("#copyBtn");
  try{ await navigator.clipboard.writeText("david.melo@colegio-santagema.es"); b.textContent="Copiado"; }
  catch(err){ b.textContent="Selecciona el correo de arriba"; }
  setTimeout(()=>b.textContent="Copiar correo",1800);
});

/* ---------- scroll: progreso, tarjetas apiladas, línea de formación ---------- */
const cards=$$(".sc"), entries=$$(".entry"), fill=$("#logFill"), bar=$("#progress");
let ticking=false;
function onScroll(){
  ticking=false;
  const h=document.documentElement.scrollHeight-innerHeight;
  bar.style.transform=`scaleX(${h>0?scrollY/h:0})`;
  const sticky=getComputedStyle(cards[0]).position==="sticky";
  cards.forEach((c,i)=>{
    const inn=c.firstElementChild, next=cards[i+1];
    if(!sticky||!next){ inn.style.transform=""; inn.style.filter=""; return; }
    const stickyTop=84+(i+1)*26;
    const p=clamp((innerHeight-next.getBoundingClientRect().top)/(innerHeight-stickyTop),0,1);
    inn.style.transform=`scale(${1-p*.05})`; inn.style.filter=`brightness(${1-p*.4})`;
  });
  const lr=log.getBoundingClientRect();
  fill.style.transform=`scaleY(${clamp((innerHeight*.65-lr.top)/lr.height,0,1)})`;
  entries.forEach(en=>en.classList.toggle("on",en.getBoundingClientRect().top<innerHeight*.65));
}
addEventListener("scroll",()=>{ if(!ticking){ ticking=true; requestAnimationFrame(onScroll);} },{passive:true});
addEventListener("resize",onScroll);
onScroll();

/* ---------- carga ---------- */
function reveal(){ root.classList.add("ready"); }
const loader=$("#loader");
if(reduce){ loader.style.display="none"; reveal(); }
else{
  const num=$("#ldNum"), lb=$("#ldBar"), t0=performance.now(), D=1100;
  (function step(now){
    const p=clamp((now-t0)/D,0,1), e=1-Math.pow(1-p,3);
    num.textContent=Math.round(e*100); lb.style.transform=`scaleX(${e})`;
    if(p<1) requestAnimationFrame(step);
    else{ loader.classList.add("done"); setTimeout(reveal,250); setTimeout(()=>loader.remove(),1000); }
  })(t0);
  setTimeout(reveal,3000);
}
