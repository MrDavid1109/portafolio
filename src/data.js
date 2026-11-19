/* Contenido bilingüe. CONTENT.es / CONTENT.en para lo dinámico,
   UI.es / UI.en para los textos de interfaz, ACCENTS compartido.
   Marca el contenido provisional con la palabra "ejemplo" / "example". */

export const ACCENTS = [
  {k:"cyan",  c:"#4cc9f0", rgb:"76,201,240"},
  {k:"amber", c:"#ffb454", rgb:"255,180,84"},
  {k:"mint",  c:"#7be0a4", rgb:"123,224,164"}
];

export const CONTENT = {
  es: {
    BRANCHES: {
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
    },
    PROJECTS: [
      {
        id:"sgema-connect", title:"SGema Connect",
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
        id:"panel-coordinador", title:"Panel de coordinadores",
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
        id:"fct-manager", title:"FCT Manager Santa Gema",
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
    ],
    LOG: [
      {when:"En curso", t:"Máster en Formación del Profesorado", p:"Especialidad en Tecnología e Informática (Secundaria, Bachillerato, FP e Idiomas). TechTitute.", c:"var(--dev)", now:true},
      {when:"2018 — 2023", t:"Ingeniería en Ciencias Informáticas", p:"Universidad de las Ciencias Informáticas.", c:"var(--doc)"},
      {when:"Año", t:"Certificaciones y cursos (ejemplo)", p:"Aquí puedes añadir certificaciones técnicas, idiomas o cursos de docencia.", c:"var(--coord)"}
    ],
    STACK: [
      {g:"Web", c:"var(--dev)", i:["HTML","CSS","JavaScript","APIs REST"]},
      {g:"Aplicaciones y datos", c:"var(--doc)", i:["Python","SQL","Git","Linux"]},
      {g:"Docencia y gestión", c:"var(--coord)", i:["Google Classroom","Planificación por proyectos","Coordinación FCT"]}
    ],
    STATS: [
      {v:"2", l:"años enseñando en Formación Profesional"},
      {v:"4", l:"ciclos que coordino: SMR, ASIR, DAM y DAW"},
      {v:"5", l:"materias que imparto, con Python para IA"},
      {v:"1", l:"año como coordinador de Informática"}
    ],
    MARQUEE1: ["Python","JavaScript","SQL","Git","Linux","Aplicaciones web","Acceso a datos","Interfaces"],
    MARQUEE2: ["Programador","Profesor","Coordinador","Máster en curso","FCT","Python para IA"]
  },

  en: {
    BRANCHES: {
      dev: {
        color:"var(--dev)", title:"Programmer", meta:"branch: programmer",
        intro:"I design and build web and desktop applications, from the database to the interface.",
        items:[
          {t:"Web applications", p:"From the data model to the interface: frontend, my own API and a relational database.", tags:["Web","API","SQL"]},
          {t:"Desktop applications", p:"Desktop programs with data access and user management.", tags:["Desktop","UI","Data"]},
          {t:"Python & AI", p:"Prototypes and tools that bring AI models into useful applications.", tags:["Python","AI"]}
        ]
      },
      doc: {
        color:"var(--doc)", title:"Teacher", meta:"branch: teacher",
        intro:"I've been teaching in vocational training (FP) for two years, with classes that end in projects that work.",
        items:[
          {t:"Web Applications", p:"SMR programme. From the first HTML to a published web app.", tags:["SMR","Web"]},
          {t:"Data Access", p:"DAM programme. How an application stores, queries and protects its data.", tags:["DAM","Data"]},
          {t:"Business Management Systems", p:"DAM programme. The management software real companies use.", tags:["DAM","ERP"]},
          {t:"Interface Development", p:"DAM programme. Interfaces designed for the people who use them.", tags:["DAM","UI"]},
          {t:"Python for AI", p:"New elective for 2nd-year ASIR and DAM, taught through projects across the whole year.", tags:["Python","AI","Projects"]}
        ]
      },
      coord: {
        color:"var(--coord)", title:"Coordinator", meta:"branch: coordinator",
        intro:"I coordinate the IT & Communications department at Colegio Santa Gema Galgani.",
        items:[
          {t:"Work placements (FCT)", p:"Relationship with partner companies and organisation of the SMR, ASIR, DAM and DAW placements.", tags:["FCT","Companies"]},
          {t:"Don Bosco National Award", p:"The department's entry in the 2026-2027 edition, together with Health.", tags:["Projects","Interdisciplinary"]},
          {t:"Department organisation", p:"Timetables, classrooms and oversight of the IT programmes.", tags:["Management","Quality"]}
        ]
      }
    },
    PROJECTS: [
      {
        id:"sgema-connect", title:"SGema Connect",
        tagline:"Jobs & community app for vocational-training students.",
        year:"2026–2027", role:"Full development",
        stack:["Flutter","Firebase","Cloud Functions","FCM"],
        highlights:[
          "Job board with CV submission to companies and offers exclusive to the school.",
          "Forum by professional field, events calendar and mentoring.",
          "Serverless Firebase backend: push notifications (FCM) and automatic emails."
        ],
        p:"Flutter app for the vocational-training students of Colegio Santa Gema (Android, iOS and web): job board, events calendar, community and mentoring. Serverless Firebase backend with Cloud Functions for notifications and emails. It's the student side of a two-part system that shares the coordinator panel.",
        demo:"https://sgema-connect-app.vercel.app/", code:"", cover:"img/sgema-connect.jpg", shots:[], ejemplo:false
      },
      {
        id:"panel-coordinador", title:"Coordinators' panel",
        tagline:"Web management panel for coordination — part of SGema Connect.",
        year:"2026–2027", role:"Full development",
        stack:["React","Vite","Firebase","Firestore"],
        highlights:[
          "Approval of student and coordinator accounts (roles and superadmin).",
          "Publishing offers and events, forum moderation and printable reports.",
          "Automatic student verification against the historical record, with hashed keys (HMAC)."
        ],
        p:"React + Vite web panel on Firebase for vocational-training coordinators: approve accounts, publish offers and events, moderate the community and generate reports. Shares the Firebase backend (Firestore, Storage and security rules) with the student app.",
        demo:"https://panel-coordinador.vercel.app", code:"", cover:"img/panel-coordinador.jpg", shots:[], ejemplo:false
      },
      {
        id:"fct-manager", title:"FCT Manager Santa Gema",
        tagline:"Python tool to manage work placements (FCT) and dual VET.",
        year:"", role:"Concept & development",
        stack:["Python","PDF","Google Sheets","Excel"],
        highlights:[
          "Partner companies and student-to-company assignment on a visual board.",
          "Official dual-VET and FCT documents (agreements, annexes and reports) as PDF.",
          "Import from Excel, Google Sheets sync and automatic backups."
        ],
        p:"Internal Python application to manage the school's entire work-placement process: students, companies, positions, official documents, reports and tracking. Includes access control and publishing via Cloudflare Tunnel for external access. Private repository; screenshots coming soon.",
        demo:"", code:"", cover:"", shots:[], ejemplo:false
      }
    ],
    LOG: [
      {when:"In progress", t:"Master's in Teacher Training", p:"Specialising in Technology & IT (Secondary, Baccalaureate, VET and Languages). TechTitute.", c:"var(--dev)", now:true},
      {when:"2018 — 2023", t:"Computer Science Engineering", p:"University of Informatics Sciences.", c:"var(--doc)"},
      {when:"Year", t:"Certifications & courses (example)", p:"Add technical certifications, languages or teaching courses here.", c:"var(--coord)"}
    ],
    STACK: [
      {g:"Web", c:"var(--dev)", i:["HTML","CSS","JavaScript","REST APIs"]},
      {g:"Apps & data", c:"var(--doc)", i:["Python","SQL","Git","Linux"]},
      {g:"Teaching & management", c:"var(--coord)", i:["Google Classroom","Project-based planning","FCT coordination"]}
    ],
    STATS: [
      {v:"2", l:"years teaching in vocational training"},
      {v:"4", l:"programmes I coordinate: SMR, ASIR, DAM & DAW"},
      {v:"5", l:"subjects I teach, including Python for AI"},
      {v:"1", l:"year as IT coordinator"}
    ],
    MARQUEE1: ["Python","JavaScript","SQL","Git","Linux","Web apps","Data access","Interfaces"],
    MARQUEE2: ["Programmer","Teacher","Coordinator","Master's in progress","FCT","Python for AI"]
  }
};

export const UI = {
  es: {
    page_title:"David Melo Boullón · Portafolio — Programo, enseño y coordino",
    loader_status:"Cargando",
    btn_color:"cambiar color", btn_color_aria:"Cambiar color de acento",
    lang_code:"EN", lang_label:"English", lang_aria:"Switch to English",
    btn_menu:"Menú", btn_menu_close:"Cerrar",
    menu_tag:"// trabajemos juntos", menu_foot:"Prototipo v0.2",
    nav_inicio:"Inicio", nav_ramas:"Ramas", nav_proyectos:"Proyectos", nav_formacion:"Formación", nav_stack:"Stack", nav_contacto:"Contacto",
    hero_status:"Máster en curso", hero_role:"Ingeniero en Ciencias Informáticas",
    hero_aria:"Programo, enseño y coordino",
    verb_dev:"Programo", verb_doc:"Enseño", verb_coord:"Coordino", verb_cursor:"Ver rama",
    hero_lead:"Aplicaciones web y de escritorio, clases de Informática en Formación Profesional y la coordinación de un departamento con prácticas en empresa.",
    term_dev:"programador", term_doc:"profesor", term_coord:"coordinador", term_now:"en curso", term_unmerged:"rama sin fusionar",
    ramas_label:"// ramas", ramas_h2:"Tres ramas, un repositorio", ramas_sub:"Cada faceta se alimenta de las otras. Sigue bajando y se apilan una sobre otra.",
    proyectos_label:"// proyectos", proyectos_h2:"Proyectos destacados", proyectos_sub:"Una selección de lo que construyo. Cada tarjeta es un repositorio: ábrela para ver el detalle.",
    formacion_label:"// formación", formacion_h2:"Formación y titulaciones", formacion_sub:"Del más reciente al más antiguo. El máster sigue abierto: es el commit que aún estoy escribiendo.",
    stack_label:"// stack", stack_h2:"Con qué trabajo", stack_sub:"Las tecnologías que uso a diario, tanto para desarrollar como para enseñar.",
    contacto_label:"// contacto", contacto_h2:"¿Hablamos?", contacto_sub:"Para un proyecto, una colaboración con el centro o unas prácticas en empresa, escríbeme.",
    btn_mail:"Enviar un correo", btn_mail_cursor:"Escribir", btn_copy:"Copiar correo", copied:"Copiado", copy_fail:"Selecciona el correo de arriba",
    cursor_linkedin:"Ver perfil", cursor_github:"Ver código",
    footer:"© 2026 David Melo Boullón · Hecho con código, sin plantillas.",
    badge_now:"en curso",
    toast_accent:"Color de acento: ",
    accents:{cyan:"Cian", amber:"Ámbar", mint:"Menta"},
    proj_detalle:"Ver detalle →", proj_demo:"Demo ↗", proj_code:"Código ↗",
    proj_open_aria:"Ver detalle de ", proj_ejemplo:"ejemplo",
    proj_nocover:"sin captura", proj_nocover_big:"sin captura · añade una imagen",
    proj_eg_cover:"ejemplo · añade captura", proj_eg_cover_big:"ejemplo · añade una imagen",
    proj_demo_btn:"Ver demo ↗", proj_code_btn:"Ver código ↗"
  },
  en: {
    page_title:"David Melo Boullón · Portfolio — I build, I teach, I coordinate",
    loader_status:"Loading",
    btn_color:"change color", btn_color_aria:"Change accent color",
    lang_code:"ES", lang_label:"Español", lang_aria:"Cambiar a español",
    btn_menu:"Menu", btn_menu_close:"Close",
    menu_tag:"// let's work together", menu_foot:"Prototype v0.2",
    nav_inicio:"Home", nav_ramas:"Branches", nav_proyectos:"Projects", nav_formacion:"Education", nav_stack:"Stack", nav_contacto:"Contact",
    hero_status:"Master's in progress", hero_role:"Computer Science Engineer",
    hero_aria:"I build, I teach and I coordinate",
    verb_dev:"I build", verb_doc:"I teach", verb_coord:"I coordinate", verb_cursor:"View branch",
    hero_lead:"Web and desktop applications, Computer Science classes in vocational training, and coordinating a department with company work placements.",
    term_dev:"programmer", term_doc:"teacher", term_coord:"coordinator", term_now:"in progress", term_unmerged:"unmerged branch",
    ramas_label:"// branches", ramas_h2:"Three branches, one repository", ramas_sub:"Each role feeds the others. Keep scrolling and they stack on top of each other.",
    proyectos_label:"// projects", proyectos_h2:"Featured projects", proyectos_sub:"A selection of what I build. Each card is a repository: open it for the details.",
    formacion_label:"// education", formacion_h2:"Education & qualifications", formacion_sub:"From newest to oldest. The master's is still open: the commit I'm still writing.",
    stack_label:"// stack", stack_h2:"What I work with", stack_sub:"The technologies I use every day, both to build and to teach.",
    contacto_label:"// contact", contacto_h2:"Let's talk", contacto_sub:"For a project, a collaboration with the school or a work placement, drop me a line.",
    btn_mail:"Send an email", btn_mail_cursor:"Write", btn_copy:"Copy email", copied:"Copied", copy_fail:"Select the email above",
    cursor_linkedin:"View profile", cursor_github:"View code",
    footer:"© 2026 David Melo Boullón · Built with code, no templates.",
    badge_now:"in progress",
    toast_accent:"Accent color: ",
    accents:{cyan:"Cyan", amber:"Amber", mint:"Mint"},
    proj_detalle:"View details →", proj_demo:"Demo ↗", proj_code:"Code ↗",
    proj_open_aria:"View details of ", proj_ejemplo:"example",
    proj_nocover:"no screenshot", proj_nocover_big:"no screenshot · add an image",
    proj_eg_cover:"example · add a screenshot", proj_eg_cover_big:"example · add an image",
    proj_demo_btn:"View demo ↗", proj_code_btn:"View code ↗"
  }
};
