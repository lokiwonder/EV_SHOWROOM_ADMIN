import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const getJWTCookie = cookies.get("access_token");
export const getDealerCookie = cookies.get("dealerName");
export const getNameCookie = cookies.get("name");
export const getCountryCookie = cookies.get("country");
