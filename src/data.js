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
    id:"plataforma-web",
    title:"Plataforma web (ejemplo)",
    tagline:"Aplicación web completa, de la base de datos a la interfaz.",
    year:"2025", role:"Diseño, backend y frontend",
    stack:["JavaScript","API REST","SQL","Vite"],
    highlights:[
      "Autenticación con roles de usuario.",
      "API REST propia sobre base de datos relacional.",
      "Desplegada y accesible desde cualquier dispositivo."
    ],
    p:"Sustituye este texto por tu mejor proyecto web: qué problema resuelve, qué construiste tú y cómo. Añade capturas en la galería.",
    demo:"", code:"", cover:"", shots:[], ejemplo:true
  },
  {
    id:"app-escritorio",
    title:"Aplicación de escritorio (ejemplo)",
    tagline:"Herramienta de escritorio con acceso a datos y gestión de usuarios.",
    year:"2024", role:"Desarrollo completo",
    stack:["Desktop","SQL","UI"],
    highlights:[
      "Interfaz pensada para quien la usa a diario.",
      "Lectura y escritura sobre base de datos local.",
      "Instalable y lista para trabajar sin conexión."
    ],
    p:"Describe aquí tu aplicación de escritorio: para quién es, qué resuelve y qué tecnología usaste. Añade capturas.",
    demo:"", code:"", cover:"", shots:[], ejemplo:true
  },
  {
    id:"proyecto-ia",
    title:"Proyecto con IA en Python (ejemplo)",
    tagline:"Prototipo que integra un modelo de IA en algo útil.",
    year:"2025", role:"Idea y programación",
    stack:["Python","IA"],
    highlights:[
      "Integra un modelo de IA en un flujo real.",
      "Pensado también como material de aula.",
      "Código ordenado y reproducible."
    ],
    p:"Cuenta aquí tu proyecto de IA: qué hace, qué modelo usa y por qué es interesante. Añade capturas o un enlace a la demo.",
    demo:"", code:"", cover:"", shots:[], ejemplo:true
  }
];
export const LOG = [
  {when:"En curso", t:"Máster (indica el nombre)", p:"Lo estoy cursando ahora. Aquí irá la universidad y la especialidad.", c:"var(--dev)", now:true},
  {when:"Año", t:"Titulación universitaria (ejemplo)", p:"Sustituye por tu grado o ingeniería, con la universidad.", c:"var(--doc)"},
  {when:"Año", t:"Ciclo formativo (ejemplo)", p:"Sustituye por tu ciclo de Formación Profesional, si lo tienes.", c:"var(--coord)"},
  {when:"Año", t:"Certificaciones y cursos (ejemplo)", p:"Aquí puedes añadir certificaciones técnicas, idiomas o cursos de docencia.", c:"var(--dev)"}
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
