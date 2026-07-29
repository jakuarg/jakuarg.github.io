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
      'Mi experiencia más fuerte está en el escritorio y en los datos: diseño de bases, operaciones CRUD y aplicaciones en C# .NET, hoy con WinUI 3. Los primeros sistemas los construí en un marco académico y de investigación; el que estoy desarrollando ahora, un punto de venta para autopartes, es el primero pensado para venderse.',
      'Me interesa el trabajo en equipo, el código ordenado y las soluciones que resuelven un problema concreto del negocio, no solo el requisito técnico.',
    ],
    en: [
      'I have been studying Information Systems Engineering at Universidad Tecnológica Nacional (FRT) since 2019, while also training in full stack development through Oracle Alumni, Fundación León and Argentina Programa.',
      'My strongest experience is on the desktop and with data: schema design, CRUD operations and C# .NET applications, today with WinUI 3. My earlier systems were built in an academic and research setting; the one I am working on now, a point-of-sale system for an auto parts shop, is the first one meant to be sold.',
      'I care about teamwork, clean code and solutions that address an actual business problem, not just a technical requirement.',
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
    value: '12k',
    label: {
      es: 'líneas en el sistema que desarrollo hoy',
      en: 'lines in the system I am building today',
    },
  },
  {
    value: '295h',
    label: { es: 'de formación complementaria', en: 'of complementary training' },
  },
] as const;

/* ------------------------------------------------------------- habilidades */

export type HardSkill = {
  name: string;
  detail: Localized<string>;
  /** Nivel autoevaluado 1-5, se usa solo como apoyo visual. */
  level: 1 | 2 | 3 | 4 | 5;
};

export const hardSkills: HardSkill[] = [
  {
    name: 'C# .NET',
    level: 4,
    detail: {
      es: 'Programación orientada a objetos, capa de servicios y acceso a datos.',
      en: 'Object-oriented programming, service layer and data access.',
    },
  },
  {
    name: 'WinUI 3',
    level: 4,
    detail: {
      es: 'Aplicaciones de escritorio con XAML, patrón MVVM y controles propios.',
      en: 'Desktop applications with XAML, the MVVM pattern and custom controls.',
    },
  },
  {
    name: 'PostgreSQL',
    level: 4,
    detail: {
      es: 'Modelado de esquemas, consultas y sincronización con una réplica local.',
      en: 'Schema modelling, queries and synchronization against a local replica.',
    },
  },
  {
    name: 'SQL',
    level: 4,
    detail: {
      es: 'Diseño de bases y consultas sobre PostgreSQL, SQLite, MySQL y SQL Server.',
      en: 'Schema design and queries over PostgreSQL, SQLite, MySQL and SQL Server.',
    },
  },
  {
    name: 'Java',
    level: 3,
    detail: {
      es: 'CRUD con MySQL, back-end orientado a objetos.',
      en: 'CRUD with MySQL, object-oriented back-end.',
    },
  },
  {
    // Nombre neutro: se lee igual en las dos versiones del sitio.
    name: 'HTML5 / CSS',
    level: 3,
    detail: {
      es: 'Maquetado responsive con variables CSS.',
      en: 'Responsive layouts using CSS variables.',
    },
  },
  {
    name: 'JavaScript',
    level: 3,
    detail: {
      es: 'Interactividad en el front-end y consumo de datos.',
      en: 'Front-end interactivity and data consumption.',
    },
  },
  {
    name: 'Git',
    level: 3,
    detail: {
      es: 'Versionado con flujo de trabajo normalizado.',
      en: 'Versioning with a normalized workflow.',
    },
  },
  {
    name: 'UML',
    level: 3,
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
  org: Localized<string>;
  title: Localized<string>;
  summary: Localized<string>;
  role: Localized<string>;
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
