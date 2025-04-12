import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationAR from './locales/ar/translation.json';

i18n.use(LanguageDetector) // определяет язык пользователя
    .use(initReactI18next) // подключает i18n к React
    .init({
        resources: {
            en: { translation: translationEN },
            ar: { translation: translationAR },
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // для React не нужно экранировать
        },
    });

export default i18n;
