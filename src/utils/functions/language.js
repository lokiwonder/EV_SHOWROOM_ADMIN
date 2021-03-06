export const getLanguageName = (language) => {
  if (language === "ar-XA") return "عربى";
  if (language === "bg") return "БЪЛГАРСКИ";
  if (language === "hr") return "Hrvatski";
  if (language === "cs") return "čech";
  if (language === "da") return "dansk";
  if (language === "de") return "Deutsch";
  if (language === "dl") return "Ελληνικά";
  if (language === "en") return "English";
  if (language === "et") return "eesti keel";
  if (language === "es") return "español";
  if (language === "fi") return "Suomalainen";
  if (language === "fr") return "Français";
  if (language === "ga") return "Gaeilge";
  if (language === "hi") return "हिन्दी";
  if (language === "hu") return "Magyar";
  if (language === "he") return "עִברִית";
  if (language === "it") return "Italiano";
  if (language === "ja") return "日本語";
  if (language === "ko") return "한국어";
  if (language === "lv") return "latviski";
  if (language === "lt") return "lietuvių";
  if (language === "nl") return "Nederlands";
  if (language === "no") return "norsk";
  if (language === "pl") return "Polski";
  if (language === "pt") return "Português";
  if (language === "sv") return "svenska";
  if (language === "ro") return "Română";
  if (language === "ru") return "Русский";
  if (language === "sr-CS") return "Српски";
  if (language === "sk") return "slovenský";
  if (language === "sl") return "Slovenščina";
  if (language === "th") return "ไทย";
  if (language === "tr") return "Türk";
  if (language === "uk-UA") return "українська";
  if (language === "zh-chs") return "简体中文";
  if (language === "zh-cht") return "繁體中文";
  return null;
};

export const getLanguageDefaultValue = (language) => {
  if (language === "ar-XA") return { label: "Arabic - AR-XA", name: "ar-XA" };
  if (language === "bg") return { label: "Bulgarian - BG", name: "bg" };
  if (language === "hr") return { label: "Croatian - HR", name: "hr" };
  if (language === "cs") return { label: "Chech - CS", name: "cs" };
  if (language === "da") return { label: "Danish - DA", name: "da" };
  if (language === "de") return { label: "German - DE", name: "de" };
  if (language === "dl") return { label: "Greek - DL", name: "dl" };
  if (language === "en") return { label: "English - EN", name: "en" };
  if (language === "et") return { label: "Estonian - ET", name: "et" };
  if (language === "es") return { label: "Spanish - ES", name: "es" };
  if (language === "fi") return { label: "Finnish - FI", name: "fi" };
  if (language === "dr") return { label: "French - DR", name: "dr" };
  if (language === "ga") return { label: "Irish - GA", name: "ga" };
  if (language === "hi") return { label: "Hindi - HI", name: "hi" };
  if (language === "hu") return { label: "Hungarian - HU", name: "hu" };
  if (language === "he") return { label: "Hebrew - HE", name: "he" };
  if (language === "it") return { label: "Italian - IT", name: "it" };
  if (language === "ja") return { label: "Japanese - JA", name: "ja" };
  if (language === "ko") return { label: "Korean - KO", name: "ko" };
  if (language === "lv") return { label: "Latvian - LV", name: "lv" };
  if (language === "lt") return { label: "Lithuanian - LT", name: "lt" };
  if (language === "nl") return { label: "Dutch - NL", name: "nl" };
  if (language === "pl") return { label: "Polish - PL", name: "pl" };
  if (language === "pt") return { label: "Portuguese - PT", name: "pt" };
  if (language === "sv") return { label: "Swedush - SV", name: "sv" };
  if (language === "ro") return { label: "Romanian - RO", name: "ro" };
  if (language === "ru") return { label: "Russian - RU", name: "ru" };
  if (language === "sr-CS") return { label: "Serbian - SR-CS", name: "sr-CS" };
  if (language === "sk") return { label: "Slobak - SK", name: "sk" };
  if (language === "sl") return { label: "Slovenian - SL", name: "sl" };
  if (language === "th") return { label: "Thai - TH", name: "th" };
  if (language === "tr") return { label: "Turkish - TR", name: "tr" };
  if (language === "uk") return { label: "Ukrainian - UK", name: "uk" };
  if (language === "zh-CHS")
    return { label: "Chinese_s - ZH-CHS", name: "zh-CHS" };
  if (language === "zh-CHT")
    return { label: "Chinese_t - ZH-CHT", name: "zh-CHT" };
  return null;
};
