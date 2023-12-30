type TLocales = "en" | "pt";

interface ILanguage {
  locale: TLocales;
  label: string;
}

export const locales: string[] = [];

export const languages: ILanguage[] = [
  {
    locale: "en",
    label: "English",
  },
  {
    locale: "pt",
    label: "Português",
  },
];

languages.map((language) => {
  return locales.push(language.locale);
});
