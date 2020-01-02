
import Vue from "vue";
import VueI18n from "vue-i18n";

import { LANGUAGE_DEFAULT, LANGUAGE_FALLBACK } from "./configuration";

// tslint:disable-next-line: no-var-requires
const en = require("../nls/en-GB");

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: LANGUAGE_DEFAULT,
  fallbackLocale: LANGUAGE_FALLBACK,
  messages: {
    en,
  },
});

export default i18n;

const loadedLanguages = ["en"]; // our default language that is preloaded

function setI18nLanguage(lang: string) {
  i18n.locale = lang;
  // Could configure axios here too
  // axios.defaults.headers.common["Accept-Language"] = lang;
  document.querySelector("html")!.setAttribute("lang", lang);
  return lang;
}

export function loadLanguageAsync(lang: string) {
  if (i18n.locale === lang || loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang));
  }
  return Promise.resolve(setI18nLanguage(lang));
  // If the language hasn't been loaded yet
  // return import(/ * webpack ChunkName: "lang-[request]" */ `../nls/${lang}.json`)
  //   .then((messages) => {
  //     i18n.setLocaleMessage(lang, messages.default);
  //     loadedLanguages.push(lang);
  //     return setI18nLanguage(lang);
  //   });
}
