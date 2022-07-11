import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const getJWTCookie = cookies.get("access_token");
export const getDealerCookie = cookies.get("dealerName");
export const getNameCookie = cookies.get("name");
export const getCountryCookie = cookies.get("country");
export const removeAllCookie = () => {
  const expires = new Date();
  cookies.set("access_token", "", {
    expires,
  });
  cookies.set("dealerName", "", {
    expires,
  });
  cookies.set("name", "", {
    expires,
  });
  cookies.set("country", "", {
    expires,
  });
};
