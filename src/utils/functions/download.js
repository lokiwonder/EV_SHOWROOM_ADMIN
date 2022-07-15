import CONNECTIVITY_ICON from "assets/images/CONNECTIVITY_256.png";
import ELECTRIFIED_ICON from "assets/images/ELECTRIFIED_256.png";
import POWERTRAN_ICON from "assets/images/POWERTRAN_256.png";
import EV_SHOWROOM_ICON from "assets/images/EV_SHOWROOM_256.png";
import {
  ELECTRIFIED,
  POWERTRAIN,
  CONNECTIVTY,
  EVSHOWROOM,
} from "utils/constants";

export const getDownloadIcon = (type) => {
  if (type === ELECTRIFIED) return ELECTRIFIED_ICON;
  if (type === POWERTRAIN) return POWERTRAN_ICON;
  if (type === CONNECTIVTY) return CONNECTIVITY_ICON;
  if (type === EVSHOWROOM) return EV_SHOWROOM_ICON;
  return null;
};

export const getDownlaodLinkWin = (type) => {
  console.log(type);
};

export const getDownlaodLinkMac = (type) => {
  console.log(type);
};
