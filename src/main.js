import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { CONTENT, UI, ACCENTS } from './data.js';

const $ = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const root = document.documentElement;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
let lenis = null;
function el(tag, cls, html){ const e=document.createElement(tag); if(cls) e.className=cls; if(html!=null) e.innerHTML=html; return e; }
const clamp = (v,a,b)=>Math.min(b,Math.max(a,v));

/* ---------- idioma ---------- */
const LANGS=["es","en"];
let lang = localStorage.getItem("lang");
if(!LANGS.includes(lang)) lang = (navigator.language||"es").toLowerCase().startsWith("en") ? "en" : "es";
root.lang = lang;
const t = UI[lang];
const c = CONTENT[lang];
if(t.page_title) document.title = t.page_title;

/* textos estáticos marcados con data-i18n / -aria / -cursor */
$$("[data-i18n]").forEach(e=>{ const k=e.dataset.i18n; if(t[k]!=null) e.textContent=t[k]; });
$$("[data-i18n-aria]").forEach(e=>{ const k=e.dataset.i18nAria; if(t[k]!=null) e.setAttribute("aria-label",t[k]); });
$$("[data-i18n-cursor]").forEach(e=>{ const k=e.dataset.i18nCursor; if(t[k]!=null) e.dataset.cursor=t[k]; });

$("#langBtn").addEventListener("click",()=>{
  const next = lang==="es" ? "en" : "es";
  localStorage.setItem("lang", next);
  try{ sessionStorage.setItem("ll_skip","1"); }catch(_){}
  location.reload();
});

/* ---------- contenido ---------- */
[["m1",c.MARQUEE1],["m2",c.MARQUEE2]].forEach(([id,arr])=>{
  const trk=$("#"+id); for(let n=0;n<4;n++) arr.forEach(x=>trk.append(el("span",null,x)));
});

const statsEl=$("#stats");
c.STATS.forEach(s=>{
  const d=el("div","stat"); const n=el("div","num"); n.setAttribute("aria-label",s.v); n.dataset.v=s.v;
  [...s.v].forEach(ch=>{
    const dg=el("span","digit"); dg.setAttribute("aria-hidden","true"); const col=el("span","col"); col.dataset.t=ch;
    for(let i=0;i<10;i++) col.append(el("span",null,i));
    dg.append(col); n.append(dg);
  });
  d.append(n, el("p",null,s.l)); statsEl.append(d);
});

const stackEl=$("#stackcards");
Object.entries(c.BRANCHES).forEach(([k,b],i)=>{
  const card=el("article","sc"); card.id="rama-"+k; card.style.setProperty("--c",b.color); card.style.setProperty("--i",i);
  const inn=el("div","sc-in");
  const head=el("div"); head.append(el("p","tag",b.meta), el("h3",null,b.title), el("p","intro",b.intro));
  const list=el("ul","rows");
  b.items.forEach(it=>{
    const li=el("li"); li.append(el("h4",null,it.t), el("p",null,it.p));
    const tg=el("div","tags"); it.tags.forEach(x=>tg.append(el("span",null,x))); li.append(tg);
    list.append(li);
  });
  inn.append(head,list); card.append(inn); stackEl.append(card);
});

/* ---------- proyectos ---------- */
const esc = s => String(s).replace(/[&<>"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch]));
const initials = x => x.replace(/\((ejemplo|example)\)/i,"").trim().split(/\s+/).slice(0,2).map(w=>w[0]||"").join("").toUpperCase();
function cover(p, big){
  if(p.cover) return `<img src="${esc(p.cover)}" alt="${esc(p.title)}" loading="lazy">`;
  const note = p.ejemplo ? (big?t.proj_eg_cover_big:t.proj_eg_cover) : (big?t.proj_nocover_big:t.proj_nocover);
  return `<span class="pj-ph" aria-hidden="true">${esc(initials(p.title))}</span><span class="pj-ph-note">${esc(note)}</span>`;
}
function links(p){
  let out="";
  if(p.demo) out+=`<a class="pj-link" href="${esc(p.demo)}" target="_blank" rel="noopener" data-stop>${esc(t.proj_demo)}</a>`;
  if(p.code) out+=`<a class="pj-link" href="${esc(p.code)}" target="_blank" rel="noopener" data-stop>${esc(t.proj_code)}</a>`;
  return out;
}
const projgrid=$("#projgrid");
c.PROJECTS.forEach(p=>{
  const card=el("article","pj"+(p.cover?"":" no-cover")); card.tabIndex=0; card.dataset.id=p.id;
  card.setAttribute("role","button"); card.setAttribute("aria-label",t.proj_open_aria+p.title);
  card.innerHTML=`
    <div class="pj-cover">${cover(p)}</div>
    <div class="pj-main">
      <div class="pj-top"><h3>${esc(p.title)}</h3>${p.ejemplo?`<span class="pj-eg">${esc(t.proj_ejemplo)}</span>`:''}</div>
      <p class="pj-tag">${esc(p.tagline)}</p>
      <div class="tags">${p.stack.slice(0,4).map(s=>`<span>${esc(s)}</span>`).join("")}</div>
    </div>
    <div class="pj-foot"><span class="pj-open">${esc(t.proj_detalle)}</span><span class="pj-links">${links(p)}</span></div>`;
  projgrid.append(card);
});

const modal=$("#projModal"), pjBody=$("#pjBody"), pjClose=$("#pjClose");
let lastFocus=null;
function openProject(id){
  const p=c.PROJECTS.find(x=>x.id===id); if(!p) return;
  const gallery = (p.shots&&p.shots.length)
    ? `<div class="pj-shots">${p.shots.map(s=>`<img src="${esc(s)}" alt="${esc(p.title)}" loading="lazy">`).join("")}</div>`
    : "";
  const meta=["#"+p.id, p.year, p.role].filter(Boolean).map(esc).join(" · ");
  pjBody.innerHTML=`
    <div class="pj-detail-cover ${p.cover?"":"no-cover"}">${cover(p,true)}</div>
    <p class="pj-commit">commit ${meta}</p>
    <h2 id="pjTitle">${esc(p.title)}${p.ejemplo?`<span class="pj-eg">${esc(t.proj_ejemplo)}</span>`:''}</h2>
    <p class="pj-lead">${esc(p.tagline)}</p>
    <p class="pj-desc">${esc(p.p)}</p>
    ${p.highlights&&p.highlights.length?`<ul class="pj-high">${p.highlights.map(h=>`<li>${esc(h)}</li>`).join("")}</ul>`:""}
    <div class="tags">${p.stack.map(s=>`<span>${esc(s)}</span>`).join("")}</div>
    ${(p.demo||p.code)?`<div class="row">${p.demo?`<a class="btn" href="${esc(p.demo)}" target="_blank" rel="noopener">${esc(t.proj_demo_btn)}</a>`:""}${p.code?`<a class="btn ghost" href="${esc(p.code)}" target="_blank" rel="noopener">${esc(t.proj_code_btn)}</a>`:""}</div>`:""}
    ${gallery}`;
  lastFocus=document.activeElement;
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
  if(lenis) lenis.stop();
  pjClose.focus();
}
function closeProject(){
  modal.classList.remove("open"); modal.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
  if(lenis) lenis.start();
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
c.LOG.forEach(e=>{
  const d=el("div","entry"); d.style.setProperty("--c",e.c); d.append(el("time",null,e.when));
  const b=el("div"); b.append(el("h3",null,e.t+(e.now?`<span class="badge">${esc(t.badge_now)}</span>`:"")), el("p",null,e.p));
  d.append(b); log.append(d);
});

const sg=$("#stackgrid");
c.STACK.forEach(s=>{
  const g=el("div","group"); g.style.setProperty("--c",s.c); g.append(el("h3",null,s.g));
  const w=el("div"); s.i.forEach(x=>w.append(el("span",null,x))); g.append(w); sg.append(g);
});

/* ---------- color de acento (tecla C) ---------- */
let accIdx=0;
function setAccent(i,notify){
  accIdx=i; const a=ACCENTS[i];
  root.style.setProperty("--accent",a.c); root.style.setProperty("--accent-rgb",a.rgb);
  if(notify){ const to=$("#toast"); to.textContent=t.toast_accent+(t.accents[a.k]||a.k); to.classList.add("show"); clearTimeout(setAccent.to); setAccent.to=setTimeout(()=>to.classList.remove("show"),1400); }
}
const nextAccent=()=>setAccent((accIdx+1)%ACCENTS.length,true);
addEventListener("keydown",e=>{ if(e.key.toLowerCase()==="c" && !e.metaKey && !e.ctrlKey && !e.altKey) nextAccent(); });
$("#colorBtn").addEventListener("click",nextAccent);

/* ---------- menú ---------- */
const menu=$("#menu"), mbtn=$("#menuBtn");
function toggleMenu(open){
  menu.classList.toggle("open",open); mbtn.setAttribute("aria-expanded",String(open)); mbtn.textContent=open?t.btn_menu_close:t.btn_menu;
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
  $$(".col",e.target).forEach((col,i)=>{ col.style.transitionDelay=(i*.12)+"s"; col.style.transform=`translateY(${-Number(col.dataset.t)}em)`; });
}),{threshold:.5});
sio.observe(statsEl);

/* ---------- entrada suave de tarjetas al hacer scroll ---------- */
if(!reduce){
  const rev=new IntersectionObserver(es=>es.forEach(e=>{
    if(!e.isIntersecting) return; rev.unobserve(e.target);
    const n=e.target; n.classList.add("in");
    n.addEventListener("animationend",()=>n.classList.remove("reveal","in"),{once:true});
  }),{threshold:.12});
  $$(".pj, .group").forEach((x,i)=>{ x.classList.add("reveal"); x.style.animationDelay=((i%3)*.08)+"s"; rev.observe(x); });
}

/* ---------- cursor propio ---------- */
if(matchMedia("(hover:hover) and (pointer:fine)").matches && !reduce){
  root.classList.add("cur");
  const dot=$("#curDot"), ring=$("#curRing"), lab=$("#curLab");
  dot.innerHTML="<span>0</span><span>1</span><span>0</span><span>1</span>";
  const mtx=$$("span",dot);
  setInterval(()=>{ for(const s of mtx){ if(Math.random()<.7) s.textContent=Math.random()<.5?"0":"1"; } },70);
  let tx=innerWidth/2, ty=innerHeight/2, rx=tx, ry=ty;
  addEventListener("pointermove",e=>{ tx=e.clientX; ty=e.clientY; dot.style.transform=`translate3d(${tx}px,${ty}px,0)`; },{passive:true});
  (function loop(){ rx+=(tx-rx)*.16; ry+=(ty-ry)*.16; ring.style.transform=`translate3d(${rx}px,${ry}px,0)`; requestAnimationFrame(loop); })();
  document.addEventListener("pointerover",e=>{
    const el2=e.target.closest("[data-cursor]");
    if(el2){ lab.textContent=el2.dataset.cursor; ring.classList.add("big"); } else { ring.classList.remove("big"); }
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
  try{ await navigator.clipboard.writeText("david.melo@colegio-santagema.es"); b.textContent=t.copied; }
  catch(err){ b.textContent=t.copy_fail; }
  setTimeout(()=>b.textContent=t.btn_copy,1800);
});

/* ---------- scroll: progreso, tarjetas apiladas, línea de formación ---------- */
const cards=$$(".sc"), entries=$$(".entry"), fill=$("#logFill"), bar=$("#progress");
let ticking=false;
function onScroll(){
  ticking=false;
  const h=document.documentElement.scrollHeight-innerHeight;
  bar.style.transform=`scaleX(${h>0?scrollY/h:0})`;
  const sticky=cards.length && getComputedStyle(cards[0]).position==="sticky";
  cards.forEach((cd,i)=>{
    const inn=cd.firstElementChild, next=cards[i+1];
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
let skip=false; try{ skip=sessionStorage.getItem("ll_skip")==="1"; if(skip) sessionStorage.removeItem("ll_skip"); }catch(_){}
if(reduce||skip){ loader.style.display="none"; reveal(); }
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

/* ---------- scroll suave (Lenis) ---------- */
if(!reduce){
  lenis = new Lenis({ duration:1.1, smoothWheel:true });
  lenis.on("scroll",()=>{ if(!ticking){ ticking=true; requestAnimationFrame(onScroll);} });
  (function lraf(time){ lenis.raf(time); requestAnimationFrame(lraf); })();
  $$('a[href^="#"]').forEach(a=>{
    a.addEventListener("click",e=>{
      const id=a.getAttribute("href"); if(!id||id.length<2) return;
      const target=document.querySelector(id); if(!target) return;
      e.preventDefault(); lenis.scrollTo(target,{offset:-84});
    });
  });
}
