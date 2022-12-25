import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, fi } from "./translations";
import { FRONTEND_DEFAULT_LANGUAGE } from "./constants/frontend";

const resources = {
    en: {translation: en},
    fi: {translation: fi}
};

i18n
.use(initReactI18next) // passes i18n down to react-i18next
.init({
          resources,
          lng: FRONTEND_DEFAULT_LANGUAGE,
          interpolation: {
              escapeValue: false // react already safes from xss
          }
      });

export default i18n;
