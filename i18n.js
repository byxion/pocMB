// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            helloWorld: 'Hello World',
            english: 'English',
            french: 'French',
        },
    },
    fr: {
        translation: {
            helloWorld: 'Bonjour le monde',
            english: 'Anglais',
            french: 'Français',
        },
    },
};

i18n.use(initReactI18next) // Utilisez initReactI18next ici
    .init({
        compatibilityJSON: 'v3',
        resources,
        lng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
