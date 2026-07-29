/**
 * Configuración global del sitio.
 *
 * `SITE_URL` y `BASE_PATH` determinan cómo se generan las URLs absolutas
 * (canonical, Open Graph, sitemap) y el prefijo de todas las rutas internas.
 *
 * - Repo de usuario (`<usuario>.github.io`) → BASE_PATH: '/'
 * - Repo de proyecto (`<usuario>.github.io/<repo>`) → BASE_PATH: '/<repo>/'
 */
export const SITE_URL = 'https://jakuarg.github.io';
export const BASE_PATH = '/';

export const DEFAULT_LOCALE = 'es' as const;
export const LOCALES = ['es', 'en'] as const;

export type Locale = (typeof LOCALES)[number];
