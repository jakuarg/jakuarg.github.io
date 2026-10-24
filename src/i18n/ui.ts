import type { Locale } from '@/site.config';

/**
 * Cadenas de interfaz (navegación, botones, etiquetas).
 * El contenido editorial vive en `src/data/content.ts`.
 */
export const ui = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.education': 'Formación',
    'nav.contact': 'Contacto',
    'nav.menu': 'Abrir menú de navegación',
    'nav.close': 'Cerrar menú de navegación',
    'nav.skip': 'Saltar al contenido principal',
    'nav.top': 'Volver arriba',

    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.contact': 'Contactame',
    'hero.available': 'Disponible para trabajar',
    'hero.scroll': 'Desplazate para ver más',

    'section.about': 'Sobre mí',
    'section.about.kicker': 'Quién soy',
    'section.skills': 'Habilidades',
    'section.skills.kicker': 'Con qué trabajo',
    'section.skills.hard': 'Técnicas',
    'skills.group.backend': 'Back-end y datos',
    'skills.group.escritorio': 'Escritorio y móvil',
    'skills.group.frontend': 'Front-end',
    'skills.group.herramientas': 'Herramientas y método',
    'skills.usage.proyectos': 'En proyectos',
    'skills.usage.formacion': 'Formación',
    'skills.legend': '«En proyectos» marca lo que usé en alguno de los sistemas de abajo.',
    'section.skills.soft': 'Blandas',
    'section.projects': 'Proyectos',
    'section.projects.kicker': 'Qué construí',
    'section.education': 'Formación',
    'section.education.kicker': 'Dónde aprendí',
    'section.languages': 'Idiomas',
    'section.contact': 'Contacto',
    'section.contact.kicker': 'Hablemos',

    'project.role': 'Mi rol',
    'project.stack': 'Tecnologías',
    'project.present': 'Actualidad',
    'project.metrics': 'El proyecto en números',
    'project.featured': 'Proyecto destacado',
    'project.caseStudy': 'Ver caso de estudio',
    'project.visitSite': 'Visitar sitio institucional',

    'gallery.title': 'Capturas',
    'gallery.open': 'Ampliar captura',
    'gallery.close': 'Cerrar las capturas',
    'gallery.prev': 'Captura anterior',
    'gallery.next': 'Captura siguiente',

    'contact.lead': '¿Te interesa mi perfil? Escribime y te respondo a la brevedad.',
    'contact.email': 'Enviar un correo',
    'contact.phone': 'Teléfono',
    'contact.location': 'Ubicación',
    'contact.copy': 'Copiar correo',
    'contact.copied': '¡Copiado!',

    'cv.download': 'Descargar CV',

    'theme.toggle': 'Cambiar tema claro/oscuro',
    'lang.toEs': 'Ver en español',
    'lang.toEn': 'Ver en inglés',
    'lang.label': 'Idioma',

    'footer.built': 'Hecho con Astro y Tailwind CSS.',
    'footer.rights': 'Todos los derechos reservados.',

    '404.title': 'Página no encontrada',
    '404.text': 'La página que buscás no existe o cambió de dirección.',
    '404.back': 'Volver al inicio',
  },
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.menu': 'Open navigation menu',
    'nav.close': 'Close navigation menu',
    'nav.skip': 'Skip to main content',
    'nav.top': 'Back to top',

    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Get in touch',
    'hero.available': 'Open to work',
    'hero.scroll': 'Scroll for more',

    'section.about': 'About me',
    'section.about.kicker': 'Who I am',
    'section.skills': 'Skills',
    'section.skills.kicker': 'What I work with',
    'section.skills.hard': 'Hard skills',
    'skills.group.backend': 'Back-end and data',
    'skills.group.escritorio': 'Desktop and mobile',
    'skills.group.frontend': 'Front-end',
    'skills.group.herramientas': 'Tools and method',
    'skills.usage.proyectos': 'Used in projects',
    'skills.usage.formacion': 'Training',
    'skills.legend': '“Used in projects” marks what I used in one of the systems below.',
    'section.skills.soft': 'Soft skills',
    'section.projects': 'Projects',
    'section.projects.kicker': 'What I built',
    'section.education': 'Education',
    'section.education.kicker': 'Where I learned',
    'section.languages': 'Languages',
    'section.contact': 'Contact',
    'section.contact.kicker': "Let's talk",

    'project.role': 'My role',
    'project.stack': 'Tech stack',
    'project.present': 'Present',
    'project.metrics': 'The project in numbers',
    'project.featured': 'Featured project',
    'project.caseStudy': 'View case study',
    'project.visitSite': 'Visit institutional site',

    'gallery.title': 'Screenshots',
    'gallery.open': 'Enlarge screenshot',
    'gallery.close': 'Close the screenshots',
    'gallery.prev': 'Previous screenshot',
    'gallery.next': 'Next screenshot',

    'contact.lead': "Interested in my profile? Send me a message and I'll get back to you shortly.",
    'contact.email': 'Send an email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.copy': 'Copy email',
    'contact.copied': 'Copied!',

    'cv.download': 'Download CV',

    'theme.toggle': 'Toggle light/dark theme',
    'lang.toEs': 'View in Spanish',
    'lang.toEn': 'View in English',
    'lang.label': 'Language',

    'footer.built': 'Built with Astro and Tailwind CSS.',
    'footer.rights': 'All rights reserved.',

    '404.title': 'Page not found',
    '404.text': "The page you're looking for doesn't exist or has moved.",
    '404.back': 'Back to home',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)['es'];
