import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";

import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import { Card, Divider } from "@mui/material";

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
  const [countryInfo, setCountryInfo] = useState({});
  const [countryCode, setCountryCode] = useState("");
  const [showroom, setShowroom] = useState("");
  const [group, setGroup] = useState("");
  const [translationLanguage, setTranslationLanguage] = useState("");
  const [translations, setTranslations] = useState(null);
  const [translationVersion, setTranslationVersion] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [untranslationPages, setUntranslationPages] = useState(0);
  const [translationPages, setTranslationPages] = useState(0);
  const [itemGroup, setItemGroup] = useState("");
  const [originalItem, setOriginalItem] = useState(null);
  const [translationItem, setTranslationItem] = useState(null);

  // description:
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
    const t = countTotalPages(showroom, translationsItems.translations);
    const u = countUntranslationPages(showroom, translationsItems.translations);
    setTotalPages(t);
    setUntranslationPages(u);
    setTranslationPages(t - u);

    setTranslations(translationsItems.translations);
    setTranslationVersion(translationsItems.translationVersion);

    setOriginalItem(null);
    setTranslationItem(null);
  };

  const onShowroomHandler = (e, v) => setShowroom(v.name);
  const onGroupHandler = (e, v) => setGroup(v.name);
  const onTranslationLanguageHandler = async (e, v) => {
    // description:
    setOriginalItem(null);
    setTranslationItem(null);
    // description:
    setTranslationLanguage(v.name);
    // description:
    const translationsItems = await getTranslations(
      countryCode,
      showroom,
      group,
      v.name
    );
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
      app_type: showroom,
      country: countryCode,
      group,
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
      app_type: showroom,
      country: countryCode,
      group,
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
  function showroomSelectorCard() {
    return (
      <Grid item sm={12} lg={3}>
        <Card>
          <MDBox p="16px">
            <MDTypography
              style={{
                fontSize: "14px",
                fontWeight: 400,
                color: "#7b809a",
              }}
            >
              Category
            </MDTypography>
            <Autocomplete
              onChange={(event, value) => onShowroomHandler(event, value)}
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
            <MDTypography
              style={{
                fontSize: "14px",
                fontWeight: 400,
                color: "#7b809a",
              }}
            >
              Vehicle
            </MDTypography>
            <Autocomplete
              onChange={(event, value) => onGroupHandler(event, value)}
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
            <MDTypography
              style={{
                fontSize: "14px",
                fontWeight: 400,
                color: "#7b809a",
              }}
            >
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
              group,
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
              group,
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
              group,
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
          <MDBox p={2}>
            <MDTypography pt={1} variant="h4">
              {`${showroom} > ${group} > ${itemGroup} #${
                translationItem.sequence_number + 1
              }`}
            </MDTypography>
          </MDBox>
          <MDBox p={2}>
            <MDTypography variant="h6">{originalItem.title}</MDTypography>
          </MDBox>
          <MDBox px={2} pb={2}>
            <MDInput
              multiline
              rows={4}
              fullWidth
              onChange={(e) => onTemplate1Handler(e, "title")}
            />
          </MDBox>
          <Divider />
          <MDBox p={2}>
            <MDTypography variant="h6">{originalItem.comment}</MDTypography>
          </MDBox>
          <MDBox px={2} pb={2}>
            <MDInput
              multiline
              rows={4}
              fullWidth
              onChange={(e) => onTemplate1Handler(e, "comment")}
            />
          </MDBox>
          <Divider />
          {originalItem.description !== "" && (
            <>
              <MDBox p={2}>
                <MDTypography variant="h6">
                  {originalItem.description}
                </MDTypography>
              </MDBox>
              <MDBox px={2} pb={2}>
                <MDInput
                  multiline
                  rows={4}
                  fullWidth
                  onChange={(e) => onTemplate1Handler(e, "description")}
                />
              </MDBox>
            </>
          )}
          <Divider />
          <MDBox p={2}>
            <Grid container spacing={3}>
              <Grid item sm={12} lg={4}>
                <MDButton color="blue" fullWidth>
                  <MDTypography variant="h6" color="white">
                    PREVIEW ORIGINAL PAGE
                  </MDTypography>
                </MDButton>
              </Grid>
              <Grid item sm={12} lg={4}>
                <MDButton color="blue" fullWidth>
                  <MDTypography variant="h6" color="white">
                    PREVIEW TRANSLATED PAGE
                  </MDTypography>
                </MDButton>
              </Grid>
              <Grid item sm={12} lg={4}>
                <MDButton
                  color="blue"
                  fullWidth
                  onClick={() => template1Save()}
                >
                  <MDTypography variant="h6" color="white">
                    SAVE
                  </MDTypography>
                </MDButton>
              </Grid>
            </Grid>
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
          <MDBox p={2}>
            <MDTypography pt={1} variant="h4">
              {`${showroom} > ${group} > ${itemGroup} #${
                translationItem.sequence_number + 1
              }`}
            </MDTypography>
          </MDBox>
          {originalItem.contents.map((content, idx) => (
            <>
              <MDBox p={2}>
                <MDTypography variant="h6">{content.comment}</MDTypography>
              </MDBox>
              <MDBox px={2} pb={2}>
                <MDInput
                  multiline
                  rows={4}
                  fullWidth
                  onChange={(e) => onTemplate2Handler(e, idx)}
                />
              </MDBox>
              <Divider />
              {content.description !== "" && (
                <>
                  <MDBox p={2}>
                    <MDTypography variant="h6">
                      {content.description}
                    </MDTypography>
                  </MDBox>
                  <MDBox px={2} pb={2}>
                    <MDInput multiline rows={4} fullWidth />
                  </MDBox>
                  <Divider />
                </>
              )}
            </>
          ))}
          <MDBox p={2}>
            <Grid container spacing={3}>
              <Grid item sm={12} lg={4}>
                <MDButton color="blue" fullWidth>
                  <MDTypography variant="h6" color="white">
                    PREVIEW ORIGINAL PAGE
                  </MDTypography>
                </MDButton>
              </Grid>
              <Grid item sm={12} lg={4}>
                <MDButton color="blue" fullWidth>
                  <MDTypography variant="h6" color="white">
                    PREVIEW TRANSLATED PAGE
                  </MDTypography>
                </MDButton>
              </Grid>
              <Grid item sm={12} lg={4}>
                <MDButton
                  color="blue"
                  fullWidth
                  onClick={() => template2Save()}
                >
                  <MDTypography variant="h6" color="white">
                    SAVE
                  </MDTypography>
                </MDButton>
              </Grid>
            </Grid>
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
      <MDBox py={3}>
        <MDBox mb={3}>
          <Grid container spacing={1.5}>
            <CountrySelectorCard />
            {languageSelectorCard()}
            {showroomSelectorCard()}
            {vehicleSelectorCard()}
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
                  style={{ verticalAlign: "middle", marginBottom: "24px" }}
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
                              variant="h2"
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
                              color="error"
                              textAlign="center"
                              variant="h2"
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
                              textAlign="center"
                              variant="h2"
                              style={{ color: "#00AAD2" }}
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
              {showroom === ELECTRIFIED && electrifiedItemCard()}
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
