import create from "zustand";
import {
  getDealerCookie,
  getNameCookie,
  getCountryCookie,
} from "utils/functions/cookie";

const initDealer = {
  dealerName: getDealerCookie,
  name: getNameCookie,
  country: getCountryCookie,
};

const useStore = create((set) => ({
  dealer: initDealer,
  setDealer: (dealer) => set(() => ({ dealer })),
  removeDealer: () => set(() => ({ dealer: null })),
}));

export default useStore;
