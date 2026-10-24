import type { Locale } from '@/site.config';

/**
 * Fuente única de verdad del contenido del portfolio.
 *
 * Los campos neutrales (fechas, tecnologías, enlaces) se declaran una sola vez;
 * el texto que cambia según el idioma se agrupa en `{ es, en }`, de modo que no
 * hay riesgo de que las dos versiones se desincronicen.
 */
export type Localized<T> = Record<Locale, T>;

/* ------------------------------------------------------------------ perfil */

export const profile = {
  name: 'David Jacas Leila',
  email: 'jacasdavid@gmail.com',
  phone: '+54 9 381 350-5274',
  // Formato E.164, para el enlace tel:
  phoneHref: '+5493813505274',
  location: {
    es: 'San Miguel de Tucumán, Argentina',
    en: 'San Miguel de Tucumán, Argentina',
  },
  role: {
    es: 'Estudiante de Ingeniería en Sistemas de Información',
    en: 'Information Systems Engineering Student',
  },
  headline: {
    es: 'In Medio Virtus — Aristóteles.',
    en: 'In Medio Virtus — Aristotle.',
  },
  objective: {
    es: 'Busco una oportunidad laboral de tiempo completo donde pueda desarrollar mis conocimientos y habilidades para ayudar a lograr las metas propuestas. Aporto mi experiencia en trabajo en equipo y proactividad.',
    en: 'I am seeking a full-time job opportunity where I can develop my knowledge and skills in order to help achieve the proposed goals. I bring my experience with teamwork and my proactivity to the table.',
  },
  about: {
    es: [
      'Estudio Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional (FRT) desde 2019, y en paralelo me formé en programación full stack con Oracle Alumni, Fundación León y Argentina Programa.',
      'Construyo sistemas de gestión completos, de la base de datos a la interfaz. El más grande es el CCE, una plataforma académica para un colegio de más de 500 estudiantes, con web, aplicación Android que funciona sin conexión y sitio institucional; está instalado y en pruebas. En paralelo desarrollo POS Autopartes, un punto de venta en C# .NET, el primero que preparo para vender.',
      'Donde más cómodo me muevo es en el back-end y los datos: diseño de esquemas, sincronización y auditoría. Me interesa el trabajo en equipo y el código que resuelve un problema concreto, no solo el requisito técnico.',
    ],
    en: [
      'I have been studying Information Systems Engineering at Universidad Tecnológica Nacional (FRT) since 2019, while also training in full stack development through Oracle Alumni, Fundación León and Argentina Programa.',
      'I build complete management systems, from the database to the interface. The largest is CCE, an academic platform for a school with more than 500 students, with a web application, an Android app that works offline and an institutional site; it is installed and under testing. Alongside it I am building POS Autopartes, a point-of-sale system in C# .NET, the first one I am preparing to sell.',
      'I am most comfortable on the back-end and the data layer: schema design, synchronization and auditing. I care about teamwork and about code that solves an actual problem, not just a technical requirement.',
    ],
  },
} as const;

/* ------------------------------------------------------------- enlaces web */
// TODO: reemplazar por tus perfiles reales antes de publicar.
export const socials = [
  { label: 'GitHub', href: 'https://github.com/jakuarg', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jakuarg', icon: 'linkedin' },
] as const;

/** El PDF vive en `public/`, se resuelve con `import.meta.env.BASE_URL`. */
export const cv: Localized<string> = {
  es: 'cv-david-jacas-leila.pdf',
  en: 'cv-david-jacas-leila.pdf',
};

/* --------------------------------------------------------------- destacados */

export const stats = [
  {
    value: '5+',
    label: { es: 'años estudiando ingeniería', en: 'years studying engineering' },
  },
  {
    value: '4',
    label: {
      es: 'sistemas de gestión construidos',
      en: 'management systems built',
    },
  },
  {
    value: '3',
    label: {
      es: 'plataformas: web, Android y escritorio',
      en: 'platforms: web, Android and desktop',
    },
  },
] as const;

/* ------------------------------------------------------------- habilidades */

/**
 * Las habilidades se agrupan por categoría y, en vez de un nivel numérico, cada
 * una declara cómo se adquirió. Un puntaje del 1 al 5 parece una evaluación
 * objetiva sin que haya un criterio detrás; esto se puede defender en una
 * entrevista.
 *
 * - `proyectos`: usada en al menos uno de los proyectos listados más abajo.
 * - `formacion`: viene de los cursos o de la carrera, sin proyecto propio aún.
 */
export type SkillUsage = 'proyectos' | 'formacion';

export type SkillGroup = 'backend' | 'escritorio' | 'frontend' | 'herramientas';

export type HardSkill = {
  name: string;
  group: SkillGroup;
  usage: SkillUsage;
  detail: Localized<string>;
};

/** Orden en que se muestran los grupos. */
export const skillGroups: SkillGroup[] = ['backend', 'escritorio', 'frontend', 'herramientas'];

export const hardSkills: HardSkill[] = [
  {
    name: 'C# .NET',
    group: 'backend',
    usage: 'proyectos',
    detail: {
      es: 'Programación orientada a objetos, capa de servicios y acceso a datos.',
      en: 'Object-oriented programming, service layer and data access.',
    },
  },
  {
    name: 'Node.js y Express',
    group: 'backend',
    usage: 'proyectos',
    detail: {
      es: 'API de la plataforma web del CCE: autenticación, permisos y auditoría.',
      en: 'API behind the CCE web platform: authentication, permissions and auditing.',
    },
  },
  {
    name: 'PostgreSQL',
    group: 'backend',
    usage: 'proyectos',
    detail: {
      es: 'Modelado de esquemas, migraciones versionadas y sincronización con réplicas locales.',
      en: 'Schema modelling, versioned migrations and synchronization with local replicas.',
    },
  },
  {
    name: 'SQL',
    group: 'backend',
    usage: 'proyectos',
    detail: {
      es: 'Diseño de bases y consultas sobre PostgreSQL, SQLite, MySQL y SQL Server.',
      en: 'Schema design and queries over PostgreSQL, SQLite, MySQL and SQL Server.',
    },
  },
  {
    name: 'Java',
    group: 'backend',
    usage: 'formacion',
    detail: {
      es: 'Back-end orientado a objetos y CRUD con MySQL, en la formación de Oracle Alumni.',
      en: 'Object-oriented back-end and CRUD with MySQL, from the Oracle Alumni training.',
    },
  },
  {
    name: 'WinUI 3',
    group: 'escritorio',
    usage: 'proyectos',
    detail: {
      es: 'Aplicaciones de escritorio con XAML, patrón MVVM y controles propios.',
      en: 'Desktop applications with XAML, the MVVM pattern and custom controls.',
    },
  },
  {
    name: 'Kotlin y Jetpack Compose',
    group: 'escritorio',
    usage: 'proyectos',
    detail: {
      es: 'App Android del CCE: toma de asistencia sin conexión y sincronización diferida.',
      en: 'CCE Android app: offline attendance capture and deferred synchronization.',
    },
  },
  {
    name: 'JavaScript',
    group: 'frontend',
    usage: 'proyectos',
    detail: {
      es: 'Interactividad en el front-end y consumo de datos.',
      en: 'Front-end interactivity and data consumption.',
    },
  },
  {
    name: 'Next.js',
    group: 'frontend',
    usage: 'proyectos',
    detail: {
      es: 'Sitio institucional del CCE, con el formulario de preinscripción integrado.',
      en: 'CCE institutional site, with the pre-enrolment form wired in.',
    },
  },
  {
    name: 'HTML5 / CSS',
    group: 'frontend',
    usage: 'proyectos',
    detail: {
      es: 'Maquetado responsive con variables CSS.',
      en: 'Responsive layouts using CSS variables.',
    },
  },
  {
    name: 'Git',
    group: 'herramientas',
    usage: 'proyectos',
    detail: {
      es: 'Versionado con flujo de trabajo normalizado.',
      en: 'Versioning with a normalized workflow.',
    },
  },
  {
    name: 'UML',
    group: 'herramientas',
    usage: 'proyectos',
    detail: {
      es: 'Análisis y diseño de sistemas antes de implementar.',
      en: 'Systems analysis and design prior to implementation.',
    },
  },
];

export const softSkills: Localized<string[]> = {
  es: [
    'Aprendizaje continuo',
    'Trabajo en equipo',
    'Comunicación efectiva',
    'Proactividad',
    'Gestión del tiempo',
    'Pensamiento crítico y analítico',
    'Capacidad resolutiva',
    'Liderazgo',
    'Flexibilidad',
  ],
  en: [
    'Continuous learning',
    'Teamwork',
    'Effective communication',
    'Proactivity',
    'Time management',
    'Critical and analytical thinking',
    'Problem solving',
    'Leadership',
    'Flexibility',
  ],
};

/* ---------------------------------------------------------------- proyectos */

export type Project = {
  /**
   * Identifica al proyecto y nombra su carpeta de capturas:
   * `src/assets/proyectos/<slug>/`. Ver `ProjectGallery.astro`.
   */
  slug: string;
  period: string;
  /** Si sigue activo, la tarjeta muestra «Actual» / «Present» en vez del año final. */
  current: boolean;
  stack: string[];
  /** Enlace al repositorio o demo; `null` si el proyecto es privado. */
  href: string | null;
  /** Ruta interna al caso de estudio, si el proyecto tiene una página propia. */
  caseStudyPath?: string;
  /** Estado visible cuando aporta más contexto que el período. */
  status?: Localized<string>;
  org: Localized<string>;
  title: Localized<string>;
  summary: Localized<string>;
  /** Se omite cuando no hay una contribución individual verificada para publicar. */
  role?: Localized<string>;
  highlights: Localized<string[]>;
  /** Cifras del proyecto; se muestran como fichas. Opcional. */
  metrics?: { value: string; label: Localized<string> }[];
  /**
   * Texto alternativo de las capturas, por nombre de archivo sin extensión.
   * Lo que no esté acá recibe una descripción genérica.
   */
  captions?: Record<string, Localized<string>>;
};

export const projects: Project[] = [
  {
    slug: 'cce',
    period: '2026',
    current: false,
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Kotlin', 'Jetpack Compose', 'Next.js'],
    href: 'https://agrotecnico2.duckdns.org/',
    caseStudyPath: '/projects/cce',
    status: { es: 'En pruebas · 2026', en: 'In testing · 2026' },
    org: {
      es: 'Colegio Agrotécnico N.º 2 «María Auxiliadora»',
      en: 'Agrotechnical School No. 2 “María Auxiliadora”',
    },
    title: {
      es: 'CCE — Centro de Calificaciones Estudiantiles',
      en: 'CCE — Student Grades Centre',
    },
    summary: {
      es: 'Sistema integral de gestión académica para una institución de más de 500 estudiantes. Centraliza calificaciones, asistencias, boletines, estadísticas y comunicación institucional mediante una plataforma web y una aplicación Android que funciona sin conexión.',
      en: 'An integrated academic management system for an institution with more than 500 students. It centralizes grades, attendance, report cards, statistics and institutional communication through a web platform and an Android application that works offline.',
    },
    highlights: {
      es: [
        'La plataforma web reúne gestión de cursos, matrículas, calificaciones, asistencia, documentación, estadísticas, usuarios, permisos, auditoría y respaldos.',
        'La aplicación Android registra asistencia sin conexión, conserva los cambios localmente y los sincroniza al recuperar la conectividad.',
        'El sitio institucional público presenta la propuesta educativa y permite iniciar preinscripciones integradas al CCE.',
        'Está instalado y en pruebas con datos ficticios durante 2026; el uso académico real se proyecta para el ciclo lectivo 2027.',
      ],
      en: [
        'The web platform brings together course management, enrolments, grades, attendance, documents, statistics, users, permissions, auditing and backups.',
        'The Android application records attendance offline, keeps changes locally and syncs them once connectivity returns.',
        'The public institutional site presents the school’s educational offering and starts pre-enrolments integrated with CCE.',
        'It is installed and being tested with fictional data during 2026; actual academic use is planned for the 2027 school year.',
      ],
    },
    metrics: [
      { value: '150 / 150', label: { es: 'usuarios en prueba concurrente', en: 'users in a concurrent test' } },
      { value: '58 ms', label: { es: 'máximo p95 medido', en: 'highest measured p95' } },
      { value: '55', label: { es: 'pruebas de humo automatizadas', en: 'automated smoke tests' } },
      { value: '35', label: { es: 'migraciones versionadas', en: 'versioned migrations' } },
    ],
    captions: {
      '01-inicio': {
        es: 'Panel de inicio con los accesos rápidos y el resumen del ciclo lectivo.',
        en: 'Home dashboard with quick actions and the summary of the school year.',
      },
      '02-calificaciones': {
        es: 'Planilla de calificaciones de una materia, con notas por cuatrimestre, final y recuperatorios.',
        en: 'Grade sheet for a subject, with marks per term, final grade and retakes.',
      },
      '03-riesgo-pedagogico': {
        es: 'Seguimiento de riesgo pedagógico: alumnos que necesitan atención temprana.',
        en: 'Academic risk tracking: students who need early attention.',
      },
      '04-auditoria': {
        es: 'Registro de auditoría con el detalle de cada cambio hecho en el sistema.',
        en: 'Audit log with the detail of every change made in the system.',
      },
      '05-movil': {
        es: 'La misma plataforma en pantalla de teléfono.',
        en: 'The same platform on a phone screen.',
      },
    },
  },
  {
    slug: 'pos-autopartes',
    period: '2025',
    current: true,
    stack: ['C# .NET', 'WinUI 3', 'PostgreSQL', 'SQLite'],
    href: null,
    org: { es: 'Producto propio', en: 'Own product' },
    title: {
      es: 'POS Autopartes — punto de venta y gestión de stock',
      en: 'POS Autopartes — point of sale and stock management',
    },
    summary: {
      es: 'Sistema de punto de venta para comercios de autopartes, desarrollado de punta a punta en C# .NET y WinUI 3. Es el proyecto en el que trabajo actualmente y el primero que preparo para vender.',
      en: 'A point-of-sale system for auto parts shops, built end to end in C# .NET and WinUI 3. It is the project I am working on right now and the first one I am preparing to sell.',
    },
    role: {
      es: 'Análisis, diseño, desarrollo y puesta en marcha',
      en: 'Analysis, design, development and rollout',
    },
    highlights: {
      es: [
        'Multi-sucursal y multi-terminal: cada caja trabaja con su propia sesión y se consolida contra la base central en PostgreSQL.',
        'Modo offline con sincronización incremental sobre un espejo local en SQLite: si se corta la red, la venta se registra igual y sube cuando vuelve.',
        'Auditoría completa con diferencias campo por campo, roles de tres niveles y un modo de soporte separado del uso diario.',
        'Módulos de inventario, venta, consulta de ventas, métricas del negocio y rendimiento por usuario, con impresión de ticket nativa e importación masiva de productos.',
      ],
      en: [
        'Multi-branch and multi-terminal: each till runs its own session and consolidates against the central PostgreSQL database.',
        'Offline mode with incremental synchronization over a local SQLite mirror: if the network drops, the sale is still recorded and uploaded once it returns.',
        'Full audit trail with field-by-field diffs, three permission levels and a support mode kept separate from day-to-day use.',
        'Inventory, sales, sales lookup, business metrics and per-user performance modules, with native receipt printing and bulk product import.',
      ],
    },
    metrics: [
      { value: '12.141', label: { es: 'líneas de código', en: 'lines of code' } },
      { value: '38', label: { es: 'servicios', en: 'services' } },
      { value: '19', label: { es: 'pantallas', en: 'screens' } },
      { value: '15', label: { es: 'tablas', en: 'tables' } },
    ],
    captions: {
      // Poné acá una descripción por captura; la clave es el nombre del archivo
      // sin extensión. Ejemplo con los nombres sugeridos en el README de capturas.
      '01-venta': {
        es: 'Pantalla de venta con el carrito y la búsqueda de productos.',
        en: 'Sales screen showing the cart and the product search.',
      },
      '02-inventario': {
        es: 'Listado de inventario con filtros por tipo de repuesto.',
        en: 'Inventory list with filters by part type.',
      },
      '03-metricas': {
        es: 'Panel de métricas del negocio.',
        en: 'Business metrics dashboard.',
      },
      '04-configuracion': {
        es: 'Configuración del sistema: sucursales, terminales y preferencias.',
        en: 'System settings: branches, terminals and preferences.',
      },
      '05-metricas-2': {
        es: 'Métricas del negocio: detalle de ventas por período.',
        en: 'Business metrics: sales breakdown by period.',
      },
      '05-mi-rendimiento': {
        es: 'Rendimiento personal del usuario que tiene la sesión abierta.',
        en: 'Personal performance for the user currently signed in.',
      },
    },
  },
  {
    slug: 'transporte-leila',
    period: '2020 — 2024',
    current: false,
    stack: ['C#', '.NET', 'SQL Server', 'UML'],
    href: null,
    org: { es: 'Transporte Leila S.A.S.', en: 'Transporte Leila S.A.S.' },
    title: {
      es: 'Sistema de gestión empresarial',
      en: 'Business management system',
    },
    summary: {
      es: 'Sistema de gestión desarrollado como parte de una investigación de Ingeniería en Sistemas, tomando como caso de estudio una empresa familiar de transporte del NOA. Quedó como trabajo académico: no llegó a implementarse.',
      en: 'Management system developed as part of a Systems Engineering research project, using a family-owned transport company in north-western Argentina as its case study. It remained an academic exercise and was never deployed.',
    },
    role: {
      es: 'Análisis, diseño y desarrollo del back-end',
      en: 'Analysis, design and back-end development',
    },
    highlights: {
      es: [
        'Relevamiento, análisis y diseño junto a distintos equipos a lo largo de la carrera.',
        'Modelo pensado para la gestión de recursos y el crecimiento de la empresa estudiada.',
        'Back-end en C# con aplicación de escritorio y base de datos SQL local.',
      ],
      en: [
        'Requirements gathering, analysis and design alongside several teams throughout my degree.',
        'A model aimed at resource management and growth for the company under study.',
        'C# back-end with a desktop application and a local SQL database.',
      ],
    },
  },
  {
    slug: 'teatro-rosita-avila',
    period: '2021 — 2022',
    current: false,
    stack: ['C#', '.NET', 'MySQL'],
    href: null,
    org: { es: 'Teatro Municipal Rosita Ávila', en: 'Teatro Municipal Rosita Ávila' },
    title: {
      es: 'Sistema de gestión de butacas digital',
      en: 'Digital seat management system',
    },
    summary: {
      es: 'Sistema propuesto como práctica de implementación y método de estudio y trabajo en equipo para la Fundación León.',
      en: 'System proposed as an implementation practice and as a study and teamwork method for Fundación León.',
    },
    role: {
      es: 'Back-end y conexión de datos',
      en: 'Back-end and data connection',
    },
    highlights: {
      es: [
        'Reserva de butacas y visualización de funciones y horarios disponibles.',
        'Programación del back-end y de la capa de acceso a datos.',
        'Desarrollado en equipo, aplicando análisis previo y modelado de datos.',
      ],
      en: [
        'Seat booking plus display of available shows and schedules.',
        'Back-end programming and the data access layer.',
        'Built as a team, applying prior analysis and data modelling.',
      ],
    },
  },
];

/* ---------------------------------------------------- caso de estudio CCE */

export const cceCaseStudy = {
  eyebrow: { es: 'Caso de estudio · 2026', en: 'Case study · 2026' },
  title: {
    es: 'CCE — Centro de Calificaciones Estudiantiles',
    en: 'CCE — Student Grades Centre',
  },
  lead: {
    es: 'De necesidades institucionales reales a una plataforma web y móvil con arquitectura modular, control de acceso, sincronización offline y pruebas verificables.',
    en: 'From real institutional needs to a web and mobile platform with modular architecture, access control, offline synchronization and verifiable testing.',
  },
  status: {
    es: 'En pruebas con datos ficticios durante 2026. Uso académico real previsto para 2027.',
    en: 'In testing with fictional data during 2026. Actual academic use is planned for 2027.',
  },
  context: {
    es: 'Proyecto para el Colegio Agrotécnico N.º 2 «María Auxiliadora», en Nueva Esperanza, Santiago del Estero: una institución con más de 500 estudiantes, conectividad irregular y equipos modestos.',
    en: 'A project for Agrotechnical School No. 2 “María Auxiliadora” in Nueva Esperanza, Santiago del Estero: an institution with more than 500 students, intermittent connectivity and modest hardware.',
  },
  challenge: {
    title: { es: 'El desafío', en: 'The challenge' },
    lead: {
      es: 'La gestión académica necesitaba reunir la información dispersa entre distintos actores y conservar una trazabilidad confiable durante años.',
      en: 'Academic management needed to bring together information distributed across different roles and preserve a reliable history over time.',
    },
    items: {
      es: [
        'Centralizar calificaciones, asistencia, boletines, legajos, mesas de examen, constancias y estadísticas.',
        'Asignar permisos precisos a administrador, director, secretario, asesor pedagógico, preceptor, profesor, alumno y tutor.',
        'Mantener el trabajo posible cuando falla la conexión y los dispositivos son limitados.',
      ],
      en: [
        'Centralize grades, attendance, report cards, student records, exam sessions, certificates and statistics.',
        'Assign precise permissions to administrators, principals, secretaries, pedagogical advisors, school staff, teachers, students and guardians.',
        'Keep work possible when connectivity fails and devices are limited.',
      ],
    },
  },
  platforms: [
    {
      title: { es: 'Web administrativa', en: 'Administrative web' },
      text: {
        es: 'Gestiona cursos, materias, matrículas, calificaciones, asistencia, documentos, estadísticas, usuarios y permisos.',
        en: 'Manages courses, subjects, enrolments, grades, attendance, documents, statistics, users and permissions.',
      },
      stack: ['Node.js', 'Express', 'PostgreSQL'],
    },
    {
      title: { es: 'Android offline-first', en: 'Offline-first Android' },
      text: {
        es: 'Registra asistencia en Room, encola cambios pendientes y los sincroniza con WorkManager cuando vuelve la conexión.',
        en: 'Records attendance in Room, queues pending changes and syncs them through WorkManager when connectivity returns.',
      },
      stack: ['Kotlin', 'Jetpack Compose', 'Room', 'WorkManager'],
    },
    {
      title: { es: 'Sitio institucional', en: 'Institutional site' },
      text: {
        es: 'Presenta la propuesta educativa de la escuela y conecta las preinscripciones con el sistema.',
        en: 'Presents the school’s educational offering and connects pre-enrolments with the system.',
      },
      stack: ['Next.js', 'React', 'TypeScript'],
    },
  ],
  architecture: {
    title: { es: 'Arquitectura pensada para el contexto', en: 'Architecture shaped by the context' },
    lead: {
      es: 'El backend separa rutas, middlewares, controladores, servicios, repositorios y adaptadores de base de datos. Esto permite que la aplicación web, Android y el sitio público compartan reglas claras sin mezclar responsabilidades.',
      en: 'The backend separates routes, middleware, controllers, services, repositories and database adapters. This lets the web app, Android app and public site share clear rules without mixing responsibilities.',
    },
    flow: {
      es: ['Navegador web', 'Caddy / HTTPS', 'CCE Web y API', 'PostgreSQL'],
      en: ['Web browser', 'Caddy / HTTPS', 'CCE Web and API', 'PostgreSQL'],
    },
    mobile: {
      es: 'La aplicación Android se conecta mediante la API REST y usa Room para el almacenamiento local. WorkManager administra la sincronización, los reintentos y la cola de cambios pendientes.',
      en: 'The Android application connects through the REST API and uses Room for local storage. WorkManager manages synchronization, retries and the queue of pending changes.',
    },
  },
  quality: {
    title: { es: 'Calidad y resguardo de la información', en: 'Quality and information safeguards' },
    items: {
      es: [
        'RBAC y permisos por ruta y operación para cada perfil institucional.',
        'Contraseñas protegidas con bcrypt, sesiones, protección CSRF, control de intentos y auditoría.',
        'Restricciones de integridad, transacciones ACID y respaldos automáticos diarios.',
        'Criterios offline explícitos: la asistencia puede encolarse; la emisión de boletines no se difiere.',
      ],
      en: [
        'RBAC and route- and operation-level permissions for each institutional profile.',
        'Passwords protected with bcrypt, sessions, CSRF protection, attempt controls and auditing.',
        'Integrity constraints, ACID transactions and daily automated backups.',
        'Explicit offline criteria: attendance can be queued; report-card issuance is not deferred.',
      ],
    },
  },
  metrics: [
    {
      value: '150 / 150',
      label: { es: 'usuarios sin errores', en: 'users without errors' },
      detail: {
        es: 'Prueba controlada con sesiones concurrentes; no representa una capacidad garantizada en producción.',
        en: 'A controlled test with concurrent sessions; it does not represent guaranteed production capacity.',
      },
    },
    {
      value: '58 ms',
      label: { es: 'máximo p95 frecuente', en: 'highest frequent-operation p95' },
      detail: {
        es: 'Máximo entre 11 operaciones evaluadas con 30 repeticiones, medido localmente sin red.',
        en: 'Highest value across 11 operations evaluated with 30 repetitions, measured locally without network latency.',
      },
    },
    {
      value: '55',
      label: { es: 'pruebas de humo', en: 'smoke tests' },
      detail: {
        es: 'Pruebas automatizadas que incluyen escenarios transversales.',
        en: 'Automated tests that include cross-cutting scenarios.',
      },
    },
    {
      value: '35',
      label: { es: 'migraciones versionadas', en: 'versioned migrations' },
      detail: {
        es: 'Archivos de migración para acompañar la evolución del esquema.',
        en: 'Migration files that support the schema’s evolution.',
      },
    },
  ],
  performanceNote: {
    es: 'La prueba detectó que 100 inicios de sesión simultáneos saturaban el grupo de hilos por el costo deliberado de bcrypt. Tras ajustar esa configuración, el p95 de navegación con 100 usuarios pasó de 5.255 ms a 610 ms. El inicio masivo aún midió 3.192 ms, por encima del umbral de 2 s.',
    en: 'Testing found that 100 simultaneous logins saturated the thread pool because of bcrypt’s deliberate cost. After adjusting that configuration, navigation p95 with 100 users went from 5,255 ms to 610 ms. Mass login still measured 3,192 ms, above the 2-second threshold.',
  },
  measurementNote: {
    es: 'Resultados obtenidos en pruebas locales controladas, con datos de demostración y sin latencia de red. Deben repetirse en el hardware y contexto operativo final.',
    en: 'Results obtained in controlled local tests with demonstration data and no network latency. They must be repeated in the final hardware and operating context.',
  },
  next: {
    title: { es: 'Estado y próximos pasos', en: 'Status and next steps' },
    lead: {
      es: 'El sistema está instalado en el servidor institucional y se prueba con datos ficticios durante 2026. Antes del uso académico real, previsto para 2027, quedan validaciones en el entorno final.',
      en: 'The system is installed on the institutional server and is being tested with fictional data during 2026. Before actual academic use, planned for 2027, validation remains in the final environment.',
    },
    items: {
      es: [
        'Realizar pruebas de compatibilidad en Firefox y Safari.',
        'Repetir las mediciones de rendimiento en la netbook y con datos representativos.',
        'Concluir la evaluación de usabilidad y planificar el archivado de auditoría por ciclo lectivo.',
      ],
      en: [
        'Run compatibility tests in Firefox and Safari.',
        'Repeat performance measurements on the netbook and with representative data.',
        'Complete usability evaluation and plan audit archival by school year.',
      ],
    },
  },
  technologies: [
    'Node.js 24',
    'Express 5',
    'PostgreSQL',
    'SQLite',
    'Kotlin',
    'Jetpack Compose',
    'Retrofit',
    'Room',
    'DataStore',
    'WorkManager',
    'Next.js 16',
    'React 19',
    'TypeScript',
    'Tailwind CSS 4',
    'Firebase Cloud Messaging',
  ],
} as const;

/* ---------------------------------------------------------------- formación */

export type Education = {
  org: string;
  period: string;
  current: boolean;
  title: Localized<string>;
  items: Localized<string[]>;
};

export const education: Education[] = [
  {
    org: 'Universidad Tecnológica Nacional — FRT',
    // `current: true` hace que el componente agregue «Actual» / «Present».
    period: '2019',
    current: true,
    title: {
      es: 'Ingeniería en Sistemas de Información',
      en: 'Information Systems Engineering',
    },
    items: { es: [], en: [] },
  },
  {
    org: 'Oracle Alumni',
    period: '2022 — 2023',
    current: false,
    title: { es: 'Programación Full Stack', en: 'Full Stack Programming' },
    items: {
      es: ['Lógica de programación (75 h)', 'Front-End: HTML5, CSS, JavaScript (110 h)', 'Back-End: Java (110 h)'],
      en: ['Programming logic (75 hs)', 'Front-End: HTML5, CSS, JavaScript (110 hs)', 'Back-End: Java (110 hs)'],
    },
  },
  {
    org: 'Fundación León',
    period: '2022 — 2023',
    current: false,
    title: { es: 'Programación de Escritorio', en: 'Desktop Programming' },
    items: {
      es: ['C# .NET — Programación Orientada a Objetos', 'MySQL', 'UML'],
      en: ['C# .NET — Object-Oriented Programming', 'MySQL', 'UML'],
    },
  },
  {
    org: 'Argentina Programa',
    period: '2021 — 2022',
    current: false,
    title: { es: 'Desarrollo web', en: 'Web development' },
    items: {
      es: ['HTML5, CSS y JavaScript'],
      en: ['HTML5, CSS and JavaScript'],
    },
  },
  {
    org: 'Fundación Instituto Latinoamericano',
    period: '2021',
    current: false,
    title: { es: 'Inglés A2', en: 'A2 English' },
    items: { es: [], en: [] },
  },
];

/* ----------------------------------------------------------------- idiomas */

export const languages = [
  {
    name: { es: 'Español', en: 'Spanish' },
    level: { es: 'Nativo', en: 'Native' },
    value: 100,
  },
  {
    name: { es: 'Inglés', en: 'English' },
    level: { es: 'Muy bueno — certificado A2', en: 'Very good — A2 certificate' },
    value: 60,
  },
] as const;
