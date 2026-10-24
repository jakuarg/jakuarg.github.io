import { DEFAULT_LOCALE, LOCALES, type Locale } from '@/site.config';
import { ui, type UIKey } from './ui';

/** Devuelve el locale a partir de la URL actual (`/en/...` → `en`). */
export function getLocaleFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.replace(import.meta.env.BASE_URL, '/').split('/');
  return LOCALES.includes(maybeLocale as Locale) ? (maybeLocale as Locale) : DEFAULT_LOCALE;
}

/** Traductor tipado: `t('nav.about')`. Falla en build si la clave no existe. */
export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key];
  };
}

/** Construye una ruta respetando `base` y el prefijo de idioma. */
export function localizePath(path: string, locale: Locale): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return `${base}${prefix}/${clean}`.replace(/\/{2,}/g, '/');
}
