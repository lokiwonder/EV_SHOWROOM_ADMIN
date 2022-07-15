import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";

import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import { Card } from "@mui/material";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import FormField from "layouts/pages/account/components/FormField";

import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";

import { getCountry } from "utils/functions/country";
import { getCountryCookie } from "utils/functions/cookie";
import { getLanguageName } from "utils/functions/language";
import {
  SHOWROOMS,
  LANGUAGE,
  TMP_ELECTRIFIED,
  ELECTRIFIED,
  TEMPLATE1,
  TEMPLATE2,
} from "utils/constants";
import { getTranslations, editTranslation } from "utils/functions/axios";
import {
  countTotalPages,
  countUntranslationPages,
} from "utils/functions/translation";
import itemCard from "./components/ElectifiedItemCard";
import CountrySelectorCard from "./components/CountrySelectCard";

function Translation() {
  // variable: //
  const [untranslationPages, setUntranslationPages] = useState(0);
  const [translationPages, setTranslationPages] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [translationLanguage, setTranslationLanguage] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [itemGroup, setItemGroup] = useState("");
  const [category, setCategory] = useState("");
  const [vehicle, setVehicle] = useState("");

  const [translationVersion, setTranslationVersion] = useState(null);
  const [translationItem, setTranslationItem] = useState(null);
  const [originalItem, setOriginalItem] = useState(null);
  const [translations, setTranslations] = useState(null);

  // description:
  const [countryInfo, setCountryInfo] = useState({});
  const [template1Item, setTemplate1Item] = useState({
    title: "",
    comment: "",
    description: "",
  });
  const [template2Item, setTemplate2Item] = useState(["", "", ""]);

  const cookie = new Cookies();

  console.log(countryInfo);

  // function: //
  const listReset = (translationsItems) => {
    const t = countTotalPages(category, translationsItems.translations);
    const u = countUntranslationPages(category, translationsItems.translations);
    setTotalPages(t);
    setUntranslationPages(u);
    setTranslationPages(t - u);

    setTranslations(translationsItems.translations);
    setTranslationVersion(translationsItems.translationVersion);

    setOriginalItem(null);
    setTranslationItem(null);
  };

  const onTranslationLanguageHandler = (e, v) => {
    setTranslationLanguage(v.name);
  };
  const onCategoryHandler = (e, v) => setCategory(v.name);
  const onVehicleHandler = async (e, v) => {
    setVehicle(v.name);
    // description:
    setOriginalItem(null);
    setTranslationItem(null);
    // description:
    // description:
    const translationsItems = await getTranslations(
      countryCode,
      category,
      v.name,
      translationLanguage
    );

    console.log(translationsItems);
    listReset(translationsItems);
  };

  // description
  const onTemplate1Handler = (e, position) => {
    const tmp = template1Item;
    if (position === "title") tmp.title = e.target.value;
    else if (position === "comment") tmp.comment = e.target.value;
    else if (position === "description") tmp.description = e.target.value;

    setTemplate1Item(tmp);
  };

  // description
  const onTemplate2Handler = (e, index) => {
    const tmp = template2Item;
    tmp[index] = e.target.value;
    setTemplate2Item(tmp);
  };

  const template1Save = async () => {
    const tmp = {
      app_type: category,
      country: countryCode,
      vehicle,
      language: translationLanguage,
      item_group: itemGroup,
      sequence_number: originalItem.sequence_number,
      translation_data: template1Item,
    };

    const translationsItems = await editTranslation(tmp);
    listReset(translationsItems);
    setTemplate1Item({
      title: "",
      comment: "",
      description: "",
    });
  };

  const template2Save = async () => {
    const tmpContents = translationItem.contents;
    tmpContents.forEach((item, i) => {
      const x = item;
      x.comment = template2Item[i];
    });

    const tmp = {
      app_type: category,
      country: countryCode,
      vehicle,
      language: translationLanguage,
      item_group: itemGroup,
      sequence_number: originalItem.sequence_number,
      translation_data: tmpContents,
    };

    const translationsItems = await editTranslation(tmp);
    listReset(translationsItems);
    setTemplate2Item(["", "", ""]);
  };

  useEffect(() => {
    setCountryCode(cookie.get("country"));
  }, []);

  // component:  //
  function categorySelectorCard() {
    return (
      <Grid item sm={12} lg={3}>
        <Card>
          <MDBox p="16px">
            <MDTypography variant="b7" color="deepgray">
              Category
            </MDTypography>
            <Autocomplete
              color="darkGray"
              onChange={(event, value) => onCategoryHandler(event, value)}
              options={SHOWROOMS}
              renderInput={(params) => (
                <FormField
                  {...params}
                  label="SHOWROOMS"
                  InputLabelProps={{ shrink: true }}
                />
              )}
            />
          </MDBox>
        </Card>
      </Grid>
    );
  }

  // component:  //
  function vehicleSelectorCard() {
    return (
      <Grid item sm={12} lg={3}>
        <Card style={{ height: "100%" }}>
          <MDBox p="16px">
            <MDTypography variant="b7" color="deepgray">
              Vehicle
            </MDTypography>
            <Autocomplete
              onChange={(event, value) => onVehicleHandler(event, value)}
              options={TMP_ELECTRIFIED}
              renderInput={(params) => (
                <FormField
                  {...params}
                  label="LANGUAGE"
                  InputLabelProps={{ shrink: true }}
                />
              )}
            />
          </MDBox>
        </Card>
      </Grid>
    );
  }

  // component:  //
  function languageSelectorCard() {
    return (
      <Grid item sm={12} lg={3}>
        <Card style={{ height: "100%" }}>
          <MDBox p="16px">
            <MDTypography color="deepgray" variant="b7">
              Language
            </MDTypography>
            <Autocomplete
              onChange={(event, value) =>
                onTranslationLanguageHandler(event, value)
              }
              options={LANGUAGE}
              renderInput={(params) => (
                <FormField
                  {...params}
                  label="LANGUAGE"
                  InputLabelProps={{ shrink: true }}
                />
              )}
            />
          </MDBox>
        </Card>
      </Grid>
    );
  }

  // component:  //
  function electrifiedItemCard() {
    return (
      <MDBox m={2} style={{ overflow: "auto", whiteSpace: "nowrap" }}>
        {translations &&
          translations.highlights.map((item) =>
            itemCard(
              vehicle,
              "Highlights",
              item,
              translationLanguage,
              countryCode,
              setOriginalItem,
              setTranslationItem,
              setItemGroup
            )
          )}
        {translations &&
          translations.charging.map((item) =>
            itemCard(
              vehicle,
              "Charging",
              item,
              translationLanguage,
              countryCode,
              setOriginalItem,
              setTranslationItem,
              setItemGroup
            )
          )}
        {translations &&
          translations.benefits.map((item) =>
            itemCard(
              vehicle,
              "Benefits",
              item,
              translationLanguage,
              countryCode,
              setOriginalItem,
              setTranslationItem,
              setItemGroup
            )
          )}
      </MDBox>
    );
  }

  // component:  //
  function template1TranslationCard() {
    return (
      <MDBox>
        <Card>
          <MDBox p="24px">
            <MDBox mb="24px">
              <MDTypography variant="h6">
                {`${category} > ${vehicle} > ${itemGroup} #${
                  translationItem.sequence_number + 1
                }`}
              </MDTypography>
            </MDBox>
            <MDBox mb="24px">
              <Card style={{ backgroundColor: "#F6F3F2" }}>
                <MDBox p="16px">
                  <MDBox mb="12px">
                    <MDTypography variant="b8" color="black">
                      {originalItem.title}
                    </MDTypography>
                  </MDBox>
                  <MDBox mb="9px">
                    <MDInput
                      p="14px"
                      style={{
                        backgroundColor: "#ffffff",
                        fontSize: "14px",
                        fontWeight: 400,
                      }}
                      multiline
                      rows={3}
                      fullWidth
                      onChange={(e) => onTemplate1Handler(e, "title")}
                    />
                  </MDBox>
                  <MDTypography variant="b4" color="activeRed">
                    If longer than 45 characters, text may not be shown properly
                    when saved.
                  </MDTypography>
                </MDBox>
              </Card>
            </MDBox>
            <MDBox mb="24px">
              <Card style={{ backgroundColor: "#F6F3F2" }}>
                <MDBox p="16px">
                  <MDBox mb="12px">
                    <MDTypography variant="b8" color="black">
                      {originalItem.comment}
                    </MDTypography>
                  </MDBox>
                  <MDBox>
                    <MDInput
                      multiline
                      rows={4}
                      fullWidth
                      onChange={(e) => onTemplate1Handler(e, "comment")}
                      style={{
                        backgroundColor: "#ffffff",
                        fontSize: "14px",
                        fontWeight: 400,
                      }}
                    />
                  </MDBox>
                </MDBox>
              </Card>
            </MDBox>
            {originalItem.description !== "" && (
              <MDBox mb="24px">
                <Card>
                  <MDBox>
                    <MDTypography variant="h6">
                      {originalItem.description}
                    </MDTypography>
                  </MDBox>
                  <MDBox>
                    <MDInput
                      multiline
                      rows={3}
                      fullWidth
                      style={{
                        backgroundColor: "#ffffff",
                        fontSize: "14px",
                        fontWeight: 400,
                      }}
                      onChange={(e) => onTemplate1Handler(e, "description")}
                    />
                  </MDBox>
                </Card>
              </MDBox>
            )}
            <MDBox mt="24px">
              <Grid container>
                <Grid px="8px" item sm={12} lg={4}>
                  <MDButton color="sand" fullWidth>
                    <MDTypography variant="b7" color="brown">
                      PREVIEW ORIGINAL PAGE
                    </MDTypography>
                  </MDButton>
                </Grid>
                <Grid px="8px" item sm={12} lg={4}>
                  <MDButton color="sand" fullWidth>
                    <MDTypography variant="b7" color="brown">
                      PREVIEW TRANSLATED PAGE
                    </MDTypography>
                  </MDButton>
                </Grid>
                <Grid px="8px" item sm={12} lg={4}>
                  <MDButton
                    color="blue"
                    fullWidth
                    onClick={() => template1Save()}
                  >
                    <MDTypography variant="b7" color="white">
                      SAVE
                    </MDTypography>
                  </MDButton>
                </Grid>
              </Grid>
            </MDBox>
          </MDBox>
        </Card>
      </MDBox>
    );
  }

  // component:  //
  function template2TranslationCard() {
    return (
      <MDBox>
        <Card>
          <MDBox p="24px">
            <MDTypography variant="h6" mb="24px">
              <span>Translations</span>
              {` > ${itemGroup} #${translationItem.sequence_number + 1}`}
            </MDTypography>
            {originalItem.contents.map((content, idx) => (
              <MDBox mb="24px">
                <Card style={{ backgroundColor: "#F6F3F2" }}>
                  <MDBox p="20px">
                    <MDBox mb="16px">
                      <MDTypography variant="b7">
                        {content.comment}
                      </MDTypography>
                    </MDBox>
                    <MDBox mb="16px">
                      <MDInput
                        multiline
                        fullWidth
                        style={{
                          backgroundColor: "#ffffff",
                          fontSize: "14px",
                          fontWeight: 400,
                        }}
                        onChange={(e) => onTemplate2Handler(e, idx)}
                      />
                    </MDBox>
                    {content.description !== "" && (
                      <Card style={{ backgroundColor: "#F6F3F2" }}>
                        <MDBox p="20px">
                          <MDBox mb="16px">
                            <MDTypography variant="b7">
                              {content.description}
                            </MDTypography>
                          </MDBox>
                          <MDBox mb="16px">
                            <MDInput
                              multiline
                              rows={4}
                              fullWidth
                              style={{
                                backgroundColor: "#ffffff",
                                fontSize: "14px",
                                fontWeight: 400,
                              }}
                            />
                          </MDBox>
                        </MDBox>
                      </Card>
                    )}
                  </MDBox>
                </Card>
              </MDBox>
            ))}
            <MDBox mt="24px">
              <Grid container>
                <Grid item sm={12} lg={4}>
                  <MDBox px="8px">
                    <MDButton color="sand" fullWidth>
                      <MDTypography variant="b7" color="brown">
                        PREVIEW ORIGINAL PAGE
                      </MDTypography>
                    </MDButton>
                  </MDBox>
                </Grid>
                <Grid item sm={12} lg={4}>
                  <MDBox px="8px">
                    <MDButton color="sand" fullWidth>
                      <MDTypography variant="b7" color="brown">
                        PREVIEW TRANSLATED PAGE
                      </MDTypography>
                    </MDButton>
                  </MDBox>
                </Grid>
                <Grid item sm={12} lg={4}>
                  <MDBox px="8px">
                    <MDButton
                      color="blue"
                      fullWidth
                      onClick={() => template2Save()}
                    >
                      <MDTypography variant="b7" color="white">
                        SAVE
                      </MDTypography>
                    </MDButton>
                  </MDBox>
                </Grid>
              </Grid>
            </MDBox>
          </MDBox>
        </Card>
      </MDBox>
    );
  }

  useEffect(() => {
    const country = getCountry(getCountryCookie);
    setCountryInfo(country);
    return () => setCountryInfo(null);
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={-4} py={1}>
        <MDBox mt={2} mb={3}>
          <Grid container spacing={1.5}>
            <CountrySelectorCard />
            {languageSelectorCard()}
            {categorySelectorCard()}
            {category && vehicleSelectorCard()}
          </Grid>
        </MDBox>

        {!translationItem && translations && (
          <MDBox>
            <Card>
              <MDBox p="24px">
                <MDTypography
                  variant="body1"
                  color="blue"
                  lineHeight={1}
                  mb="24px"
                  verticalAlign="middle"
                >
                  Setup Display Vehicle -{" "}
                  <span style={{ color: "#00AAD2" }}>
                    v {translationVersion}
                  </span>
                </MDTypography>
                <Grid container>
                  <Grid item sm={12} lg={3} xl={3}>
                    <MDBox mt={1}>
                      <Card
                        style={{
                          backgroundColor: "#F6F3F2",
                          marginRight: "24px",
                        }}
                      >
                        <Grid container>
                          <Grid item xs={7}>
                            <MDTypography
                              p={2}
                              style={{
                                fontWeight: 500,
                                fontSize: "16px",
                                opacity: "0.3",
                              }}
                            >
                              TOTAL PAGES
                            </MDTypography>
                          </Grid>
                          <Grid item xs={5}>
                            <MDTypography
                              py={2}
                              color="black"
                              verticalAlign="middle"
                              textAlign="center"
                              variant="h4"
                            >
                              {totalPages}
                            </MDTypography>
                          </Grid>
                        </Grid>
                      </Card>
                    </MDBox>
                  </Grid>
                  <Grid item sm={12} md={3} xl={3}>
                    <MDBox mt={1}>
                      <Card
                        style={{
                          backgroundColor: "#F6F3F2",
                          marginRight: "24px",
                        }}
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={7}>
                            <MDTypography
                              p={2}
                              style={{
                                fontWeight: 500,
                                fontSize: "16px",
                                opacity: "0.3",
                              }}
                            >
                              UNDEFINED
                            </MDTypography>
                          </Grid>
                          <Grid item xs={5}>
                            <MDTypography
                              p={2}
                              color="activeRed"
                              textAlign="center"
                              variant="h4"
                            >
                              {untranslationPages}
                            </MDTypography>
                          </Grid>
                        </Grid>
                      </Card>
                    </MDBox>
                  </Grid>
                  <Grid item sm={12} md={3} xl={3}>
                    <MDBox mt={1}>
                      <Card
                        style={{
                          backgroundColor: "#F6F3F2",
                          marginRight: "24px",
                        }}
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={7}>
                            <MDTypography
                              p={2}
                              style={{
                                fontWeight: 500,
                                fontSize: "16px",
                                opacity: "0.3",
                              }}
                            >
                              {getLanguageName(translationLanguage)}
                            </MDTypography>
                          </Grid>
                          <Grid item xs={5}>
                            <MDTypography
                              p={2}
                              color="activeBlue"
                              textAlign="center"
                              variant="h4"
                            >
                              {translationPages}
                            </MDTypography>
                          </Grid>
                        </Grid>
                      </Card>
                    </MDBox>
                  </Grid>
                </Grid>
              </MDBox>
              {category === ELECTRIFIED && electrifiedItemCard()}
            </Card>
          </MDBox>
        )}
        {translationItem &&
          originalItem &&
          translationItem.type === TEMPLATE1 &&
          template1TranslationCard()}
        {translationItem &&
          originalItem &&
          translationItem.type === TEMPLATE2 &&
          template2TranslationCard()}
      </MDBox>
    </DashboardLayout>
  );
}

export default Translation;
