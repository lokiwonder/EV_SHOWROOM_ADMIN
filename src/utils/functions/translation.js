const { ELECTRIFIED } = require("utils/constants");

export const countTotalPages = (appType, translations) => {
  let cnt = 0;
  if (appType === ELECTRIFIED) {
    cnt += translations.highlights.length;
    cnt += translations.charging.length;
    cnt += translations.benefits.length;
  }
  return cnt;
};

export const countUntranslationPages = (appType, translations) => {
  let cnt = 0;
  if (appType === ELECTRIFIED) {
    translations.highlights.forEach((template) => {
      if (!template.translation_status) cnt += 1;
    });
    translations.charging.forEach((template) => {
      if (!template.translation_status) cnt += 1;
    });
    translations.benefits.forEach((template) => {
      if (!template.translation_status) cnt += 1;
    });
  }
  return cnt;
};
