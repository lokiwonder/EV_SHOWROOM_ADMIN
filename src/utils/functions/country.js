import {
  AUSTRIA,
  BELGIUM,
  DENMARK,
  FINLAND,
  FRANCE,
  GERMANY,
  ICELAND,
  ITALY,
  MALTA,
  NETHERRANDS,
  NORWAY,
  PORTUGAL,
  SPAIN,
  SWEDEN,
  SWISS,
  UK,
  BULGARIA,
  CZECH,
  HUNGARY,
  POLAND,
  ROMANIA,
  SLOVENIA,
  CROATIA,
  SLOVAKIA,
  CYPRUS,
  GREECE,
  CANARY_ISLAND,
  REUNION,
} from "utils/constants";

export const getCountry = (country) => {
  if (country === AUSTRIA.code) return AUSTRIA;
  if (country === BELGIUM.code) return BELGIUM;
  if (country === DENMARK.code) return DENMARK;
  if (country === FINLAND.code) return FINLAND;
  if (country === FRANCE.code) return FRANCE;
  if (country === GERMANY.code) return GERMANY;
  if (country === ICELAND.code) return ICELAND;
  if (country === ITALY.code) return ITALY;
  if (country === MALTA.code) return MALTA;
  if (country === NETHERRANDS.code) return NETHERRANDS;
  if (country === NORWAY.code) return NORWAY;
  if (country === PORTUGAL.code) return PORTUGAL;
  if (country === SPAIN.code) return SPAIN;
  if (country === SWEDEN.code) return SWEDEN;
  if (country === SWISS.code) return SWISS;
  if (country === UK.code) return UK;
  if (country === CZECH.code) return CZECH;
  if (country === BULGARIA.code) return BULGARIA;
  if (country === HUNGARY.code) return HUNGARY;
  if (country === POLAND.code) return POLAND;
  if (country === ROMANIA.code) return ROMANIA;
  if (country === SLOVENIA.code) return SLOVENIA;
  if (country === CROATIA.code) return CROATIA;
  if (country === SLOVAKIA.code) return SLOVAKIA;
  if (country === CYPRUS.code) return CYPRUS;
  if (country === GREECE.code) return GREECE;
  if (country === CANARY_ISLAND.code) return CANARY_ISLAND;
  if (country === REUNION.code) return REUNION;
  return null;
};

export const getCountryNameCode = (country) => {
  if (country === AUSTRIA.code) return `${AUSTRIA.name} - ${country}`;
  if (country === BELGIUM.code) return `${BELGIUM.name} - ${country}`;
  if (country === DENMARK.code) return `${DENMARK.name} - ${country}`;
  if (country === FINLAND.code) return `${FINLAND.name} - ${country}`;
  if (country === FRANCE.code) return `${FRANCE.name} - ${country}`;
  if (country === GERMANY.code) return `${GERMANY.name} - ${country}`;
  if (country === ICELAND.code) return `${ICELAND.name} - ${country}`;
  if (country === ITALY.code) return `${ITALY.name} - ${country}`;
  if (country === MALTA.code) return `${MALTA.name} - ${country}`;
  if (country === NETHERRANDS.code) return `${NETHERRANDS.name} - ${country}`;
  if (country === NORWAY.code) return `${NORWAY.name} - ${country}`;
  if (country === PORTUGAL.code) return `${PORTUGAL.name} - ${country}`;
  if (country === SPAIN.code) return `${SPAIN.name} - ${country}`;
  if (country === SWEDEN.code) return `${SWEDEN.name} - ${country}`;
  if (country === SWISS.code) return `${SWISS.name} - ${country}`;
  if (country === UK.code) return `${UK.name} - ${country}`;
  if (country === CZECH.code) return `${CZECH.name} - ${country}`;
  if (country === BULGARIA.code) return `${BULGARIA.name} - ${country}`;
  if (country === HUNGARY.code) return `${HUNGARY.name} - ${country}`;
  if (country === POLAND.code) return `${POLAND.name} - ${country}`;
  if (country === ROMANIA.code) return `${ROMANIA.name} - ${country}`;
  if (country === SLOVENIA.code) return `${SLOVENIA.name} - ${country}`;
  if (country === CROATIA.code) return `${CROATIA.name} - ${country}`;
  if (country === SLOVAKIA.code) return `${SLOVAKIA.name} - ${country}`;
  if (country === CYPRUS.code) return `${CYPRUS.name} - ${country}`;
  if (country === GREECE.code) return `${GREECE.name} - ${country}`;
  if (country === CANARY_ISLAND.code)
    return `${CANARY_ISLAND.name} - ${country}`;
  if (country === REUNION.code) return `${REUNION.name} - ${country}`;
  return null;
};

export const getCountryDefaultValue = (country) => {
  if (country === "BE") return { label: "Belgique - BE", name: "BE" };
  if (country === "BA")
    return { label: "Bosna i Hercegovina - BA", name: "BA" };
  if (country === "CZ") return { label: "Česko - CZ", name: "CZ" };
  if (country === "XC") return { label: "Ceuta - XC", name: "XC" };
  if (country === "DK") return { label: "Danmark - DK", name: "DK" };
  if (country === "DE") return { label: "Deutschland - DE", name: "DE" };
  if (country === "EE") return { label: "Eesti - EE", name: "EE" };
  if (country === "ES") return { label: "España - ES", name: "ES" };
  if (country === "FR") return { label: "France - FR", name: "FR" };
  if (country === "HR") return { label: "Hrvatska - HR", name: "HR" };
  if (country === "IE") return { label: "Ireland - IE", name: "IE" };
  if (country === "IS") return { label: "Ísland - IE", name: "IS" };
  if (country === "IC") return { label: "Islas Canarias - IC", name: "IC" };
  if (country === "IT") return { label: "Italia - IT", name: "IT" };
  if (country === "LV") return { label: "Latvija - LV", name: "LV" };
  if (country === "LT") return { label: "Lietuva - LT", name: "LT" };
  if (country === "HU") return { label: "Magyarország - HU", name: "HU" };
  if (country === "MT") return { label: "Malta - MT", name: "MT" };
  if (country === "NL") return { label: "Nederland - NL", name: "NL" };
  if (country === "NO") return { label: "Norge - NO", name: "NO" };
  if (country === "AT") return { label: "Österreich - AT", name: "AT" };
  if (country === "PL") return { label: "Polska - PL", name: "PL" };
  if (country === "PT") return { label: "Portugal - PT", name: "PT" };
  if (country === "RO") return { label: "România - RO", name: "RO" };
  if (country === "SI") return { label: "Slovenija - SI", name: "SI" };
  if (country === "SK") return { label: "Slovensko - SK", name: "SK" };
  if (country === "FI") return { label: "Suomi - FI", name: "FI" };
  if (country === "SE") return { label: "Sverige - SE", name: "SE" };
  if (country === "CH") return { label: "Swiss - CH", name: "CH" };
  if (country === "TR") return { label: "Türkiye - TR", name: "TR" };
  if (country === "GB") return { label: "United Kingdom - GB", name: "GB" };
  if (country === "GR") return { label: "Ελλάδα - GR", name: "GR" };
  if (country === "CY") return { label: "Κυπριακή - CY", name: "CY" };
  if (country === "GB") return { label: "България - BG", name: "BG" };
  if (country === "RS") return { label: "Србија - RS", name: "RS" };
  return null;
};
