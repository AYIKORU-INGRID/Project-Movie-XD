// src/i18n.js

const translations = {
  en: {
    search: 'Search',
    year: 'Year',
    noImage: 'No Image Available',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    // Add more keys as needed
  },
  es: {
    search: 'Buscar',
    year: 'Año',
    noImage: 'Imagen no disponible',
    darkMode: 'Modo Oscuro',
    lightMode: 'Modo Claro',
  },
  fr: {
    search: 'Rechercher',
    year: 'Année',
    noImage: 'Image non disponible',
    darkMode: 'Mode Sombre',
    lightMode: 'Mode Clair',
  },
};

export function t(key, lang = 'en') {
  return translations[lang]?.[key] || translations['en'][key] || key;
}

export const supportedLanguages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
];
