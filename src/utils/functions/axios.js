import { Cookies } from "react-cookie";
import axios from "axios";

import {
  SIGNIN_URL,
  ADMIN_DISPLAY_SETUP_URL,
  SAVE_ELECTRIFIED_SETTING_URL,
  DISPLAY_TRANSLATION_URL,
  GET_TRANSLATION_ITEM_URL,
  EDIT_TRANSLATION_ITEM_URL,
} from "utils/constants";

const cookies = new Cookies();

export const signin = async (id, password) => {
  const body = { id, password };
  let result;
  await axios
    .post(SIGNIN_URL, body)
    .then((res) => {
      const { name, country } = res.data;

      const expires = new Date();

      expires.setSeconds(expires.getSeconds() + res.data.expired_time);
      cookies.set("access_token", res.data.access_token, {
        path: "/",
        secure: true,
        expires,
      });
      cookies.set("dealerName", res.data.dealer_name, {
        path: "/",
        secure: true,
        expires,
      });
      cookies.set("name", name, {
        path: "/",
        secure: true,
        expires,
      });
      cookies.set("country", country, {
        path: "/",
        secure: true,
        expires,
      });

      result = {
        result: true,
        dealerName: res.data.dealer_name,
        name,
        country,
      };
    })
    .catch(() => {
      result = { result: false, dealerName: null, name: null, country: null };
    });
  return result;
};

export const displaySetup = async () => {
  let result;

  const accessToken = cookies.get("access_token");

  await axios
    .get(ADMIN_DISPLAY_SETUP_URL, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((res) => {
      result = {
        result: true,
        electrifiedAll: res.data.all_electrifies,
        electrified_version: res.data.electrified_version,
        displayableElectrifies: res.data.displayable_electrifies,
      };
    })
    .catch(() => {
      result = {
        result: false,
        electrifiedAll: null,
        electrified_version: null,
        displayableElectrifies: null,
      };
    });
  return result;
};

export const saveEelctrifiedSettting = async (
  displayableElectrifies,
  electrifiedVersion
) => {
  let result;

  const accessToken = cookies.get("access_token");
  const body = {
    displayable_electrifies: displayableElectrifies,
    electrified_version: electrifiedVersion,
  };

  await axios
    .patch(SAVE_ELECTRIFIED_SETTING_URL, body, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((res) => {
      result = {
        result: true,
        electrifiedAll: res.data.all_electrifies,
        electrified_version: res.data.electrified_version,
        displayableElectrifies: res.data.displayable_electrifies,
      };
    })
    .catch(() => {
      result = {
        result: false,
        electrifiedAll: null,
        electrified_version: null,
        displayableElectrifies: null,
      };
    });
  return result;
};

export const getTranslations = async (country, appType, group, language) => {
  let result;
  const accessToken = cookies.get("access_token");
  const body = {
    app_type: appType,
    country,
    group,
    language,
  };

  console.log(`language: ${language}`);

  await axios
    .post(DISPLAY_TRANSLATION_URL, body, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((res) => {
      result = {
        result: true,
        translationVersion: res.data.translation_version,
        translations: res.data.translations,
      };
    })
    .catch(() => {
      result = {
        result: false,
        translationVersion: null,
        translations: null,
      };
    });
  return result;
};

export const getTranslationItem = async (dto) => {
  let result;

  const { country, appType, group, language, itemGroup, sequenceNumber } = dto;
  const accessToken = cookies.get("access_token");
  const body = {
    country,
    app_type: appType,
    group,
    language,
    item_group: itemGroup,
    sequence_number: sequenceNumber,
  };

  await axios
    .post(GET_TRANSLATION_ITEM_URL, body, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((res) => {
      console.log(res);
      result = {
        result: true,
        originalItem: res.data.original_item,
        translationItem: res.data.translation_item,
      };
    })
    .catch(() => {
      result = {
        result: false,
        originalItem: null,
        translationItem: null,
      };
    });
  return result;
};

export const editTranslation = async (dto) => {
  let result;
  const accessToken = cookies.get("access_token");

  await axios
    .patch(EDIT_TRANSLATION_ITEM_URL, dto, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((res) => {
      result = {
        result: true,
        translationVersion: res.data.translation_version,
        translations: res.data.translations,
      };
    })
    .catch(() => {
      result = {
        result: false,
        translationVersion: null,
        translations: null,
      };
    });
  return result;
};
