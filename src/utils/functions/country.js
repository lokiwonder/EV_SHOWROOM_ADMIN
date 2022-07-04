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

export function setCountry(country) {
  return country;
}
