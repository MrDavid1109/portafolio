/* Todo el contenido vive aquí. Edita los textos y la página se actualiza. */
export const BRANCHES = {
  dev: {
    color:"var(--dev)", title:"Programador", meta:"rama: programador",
    intro:"Diseño y construyo aplicaciones web y de escritorio, de la base de datos a la interfaz.",
    items:[
      {t:"Aplicaciones web", p:"Del modelo de datos a la interfaz: frontend, API propia y base de datos relacional.", tags:["Web","API","SQL"]},
      {t:"Aplicaciones de escritorio", p:"Programas de escritorio con acceso a datos y gestión de usuarios.", tags:["Desktop","UI","Datos"]},
      {t:"Python e IA", p:"Prototipos y herramientas que integran modelos de IA en aplicaciones útiles.", tags:["Python","IA"]}
    ]
  },
  doc: {
    color:"var(--doc)", title:"Profesor", meta:"rama: profesor",
    intro:"Llevo dos años enseñando en Formación Profesional, con clases que acaban en proyectos que funcionan.",
    items:[
      {t:"Aplicaciones Web", p:"Módulo de SMR. Del primer HTML a una aplicación web publicada.", tags:["SMR","Web"]},
      {t:"Acceso a Datos", p:"Módulo de DAM. Cómo una aplicación guarda, consulta y protege su información.", tags:["DAM","Datos"]},
      {t:"Sistemas de Gestión Empresarial", p:"Módulo de DAM. Software de gestión que usan las empresas de verdad.", tags:["DAM","ERP"]},
      {t:"Desarrollo de Interfaces", p:"Módulo de DAM. Interfaces pensadas para quien las usa.", tags:["DAM","UI"]},
      {t:"Python para IA", p:"Optativa nueva para 2º de ASIR y 2º de DAM, planteada por proyectos a lo largo de todo el curso.", tags:["Python","IA","Proyectos"]}
    ]
  },
  coord: {
    color:"var(--coord)", title:"Coordinador", meta:"rama: coordinador",
    intro:"Coordino el departamento de Informática y Comunicaciones del Colegio Santa Gema Galgani desde hace un año.",
    items:[
      {t:"Prácticas en empresa (FCT)", p:"Relación con las empresas colaboradoras y organización de las prácticas de SMR, ASIR, DAM y DAW.", tags:["FCT","Empresas"]},
      {t:"Premio Nacional Don Bosco", p:"Participación del departamento en la edición 2026-2027, junto a Sanidad.", tags:["Proyectos","Interdisciplinar"]},
      {t:"Organización del departamento", p:"Horarios, aulas y supervisión de la actividad docente de los ciclos de Informática.", tags:["Gestión","Calidad"]}
    ]
  }
};
/* Proyectos destacados. Cada uno es una "tarjeta de repositorio".
   Sustituye los de ejemplo por los tuyos: pon ejemplo:false al hacerlo,
   añade cover (ruta a la captura principal) y shots (galería). */
export const PROJECTS = [
  {
    id:"sgema-connect",
    title:"SGema Connect",
    tagline:"App de empleo y comunidad para el alumnado de FP.",
    year:"2026–2027", role:"Desarrollo completo",
    stack:["Flutter","Firebase","Cloud Functions","FCM"],
    highlights:[
      "Bolsa de empleo con envío de CV a empresas y ofertas exclusivas del centro.",
      "Foro por familias profesionales, agenda de eventos y mentorías.",
      "Backend serverless en Firebase: avisos push (FCM) y correos automáticos."
    ],
    p:"App en Flutter para el alumnado de FP del Colegio Santa Gema (Android, iOS y web): bolsa de empleo, agenda de eventos, comunidad y mentorías. Backend serverless en Firebase con Cloud Functions para notificaciones y correos. Es la pieza del alumnado de un sistema de dos partes que comparte el panel de coordinación.",
    demo:"https://sgema-connect-app.vercel.app/", code:"", cover:"img/sgema-connect.jpg", shots:[], ejemplo:false
  },
  {
    id:"panel-coordinador",
    title:"Panel de coordinadores",
    tagline:"Panel web de gestión para coordinación — parte de SGema Connect.",
    year:"2026–2027", role:"Desarrollo completo",
    stack:["React","Vite","Firebase","Firestore"],
    highlights:[
      "Aprobación de cuentas de alumnado y coordinadores (roles y superadmin).",
      "Publicación de ofertas y eventos, moderación del foro e informes imprimibles.",
      "Verificación automática del alumnado contra el histórico, con claves cifradas (HMAC)."
    ],
    p:"Panel web en React + Vite sobre Firebase para los coordinadores de FP: aprobar cuentas, publicar ofertas y eventos, moderar la comunidad y generar informes. Comparte el backend de Firebase (Firestore, Storage y reglas de seguridad) con la app del alumnado.",
    demo:"https://panel-coordinador.vercel.app", code:"", cover:"img/panel-coordinador.jpg", shots:[], ejemplo:false
  },
  {
    id:"fct-manager",
    title:"FCT Manager Santa Gema",
    tagline:"Herramienta en Python para gestionar las FCT y la FP Dual del centro.",
    year:"", role:"Idea y desarrollo",
    stack:["Python","PDF","Google Sheets","Excel"],
    highlights:[
      "Empresas colaboradoras y asignación de alumnos con un tablero visual.",
      "Documentos oficiales de FP Dual y FCT (convenios, anexos e informes) en PDF.",
      "Importación desde Excel, sincronización con Google Sheets y backup automático."
    ],
    p:"Aplicación interna en Python para gestionar todo el proceso de prácticas de FP del centro: alumnos, empresas, plazas, documentación oficial, informes y seguimiento. Incluye control de acceso y publicación mediante Cloudflare Tunnel para acceso externo. Repositorio privado; capturas próximamente.",
    demo:"", code:"", cover:"", shots:[], ejemplo:false
  }
];
export const LOG = [
  {when:"En curso", t:"Máster en Formación del Profesorado", p:"Especialidad en Tecnología e Informática (Secundaria, Bachillerato, FP e Idiomas). TechTitute.", c:"var(--dev)", now:true},
  {when:"2018 — 2023", t:"Ingeniería en Ciencias Informáticas", p:"Universidad de las Ciencias Informáticas.", c:"var(--doc)"},
  {when:"Año", t:"Certificaciones y cursos (ejemplo)", p:"Aquí puedes añadir certificaciones técnicas, idiomas o cursos de docencia.", c:"var(--coord)"}
];
export const STACK = [
  {g:"Web", c:"var(--dev)", i:["HTML","CSS","JavaScript","APIs REST"]},
  {g:"Aplicaciones y datos", c:"var(--doc)", i:["Python","SQL","Git","Linux"]},
  {g:"Docencia y gestión", c:"var(--coord)", i:["Google Classroom","Planificación por proyectos","Coordinación FCT"]}
];
export const STATS = [
  {v:"2", l:"años enseñando en Formación Profesional"},
  {v:"4", l:"ciclos que coordino: SMR, ASIR, DAM y DAW"},
  {v:"5", l:"materias que imparto, con Python para IA"},
  {v:"1", l:"año como coordinador de Informática"}
];
export const MARQUEE1 = ["Python","JavaScript","SQL","Git","Linux","Aplicaciones web","Acceso a datos","Interfaces"];
export const MARQUEE2 = ["Programador","Profesor","Coordinador","Máster en curso","FCT","Python para IA"];
export const ACCENTS = [
  {n:"Cian", c:"#4cc9f0", rgb:"76,201,240"},
  {n:"Ámbar", c:"#ffb454", rgb:"255,180,84"},
  {n:"Menta", c:"#7be0a4", rgb:"123,224,164"}
];
