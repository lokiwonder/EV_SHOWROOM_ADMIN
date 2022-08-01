// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";

import { Card } from "@mui/material";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { GET_IMAGE_URL, ELECTRIFIED } from "utils/constants";
import { getTranslationItem } from "utils/functions/axios";
import { getLanguageName } from "utils/functions/language";

function itemCard(
  group,
  menu,
  item,
  language,
  country,
  translations,
  setOriginalItem,
  setTranslationItem,
  setItemGroup,
  setTemplate1PopItem,
  setTemplate1Pop
) {
  // description: translation handler //
  const onEditHandler = async () => {
    const dto = {
      country,
      appType: ELECTRIFIED,
      group,
      language,
      itemGroup: menu,
      sequenceNumber: item.sequence_number,
    };
    const result = await getTranslationItem(dto);
    setOriginalItem(result.originalItem);
    setTranslationItem(result.translationItem);
    setItemGroup(menu);
  };

  // description: preview handler //
  const onPreviewHandler = () => {
    if (item.type === "Template 1") {
      let pageLength = 0;
      if (menu === "Highlights") pageLength = translations.highlights.length;
      if (menu === "Charging") pageLength = translations.charging.length;
      if (menu === "Benefits") pageLength = translations.benefits.length;
      const popupItem = {
        title: item.title,
        comment: item.comment,
        description: item.description ? item.description : "none",
        pageClass: menu,
        seq: item.sequence_number,
        pageLength,
        image: item.image,
        electrified: group,
      };
      setTemplate1PopItem(popupItem);
    }
    // if (item.type === "Template 2") {
    // }
    // if (item.type === "Template 3") {
    // }
    setTemplate1Pop(true);
  };

  return (
    <MDBox my={1} mx={1.5} style={{ display: "inline-block", width: "240px" }}>
      <Card style={{ backgroundColor: "#F6F3F2" }}>
        <MDBox p={2}>
          <MDBox textAlign="center">
            <MDBox
              component="img"
              src={
                item.type === "Template 2"
                  ? `${GET_IMAGE_URL}${item.contents[0].image}`
                  : `${GET_IMAGE_URL}${item.image}`
              }
              style={{ width: "200px", height: "160px", objectFit: "cover" }}
            />
          </MDBox>
          <MDTypography mt="16px" variant="h6" color="darkGray">
            {`${menu} #${item.sequence_number + 1}`}
          </MDTypography>
          <MDBox mt="6px">
            {item.type === "Template 3" ? (
              <MDTypography variant="b7" color="text" opacity={0.6}>
                No Text
              </MDTypography>
            ) : null}
            {item.type !== "Template 3" &&
              (item.translation_status ? (
                <MDTypography variant="b7" color="text" opacity={0.6}>
                  {getLanguageName(language)}
                </MDTypography>
              ) : (
                <MDTypography variant="b7" color="activeRed" opacity={0.3}>
                  UNDEFINED
                </MDTypography>
              ))}
          </MDBox>
          <MDBox mt="19px">
            <MDButton
              color="blue"
              fullWidth
              disabled={item.type === "Template 3"}
              onClick={() => onEditHandler()}
            >
              <MDTypography variant="b7" color="white">
                EDIT
              </MDTypography>
            </MDButton>
          </MDBox>
          <MDBox mt="16px">
            <MDButton
              style={{ backgroundColor: "#E4DCD3" }}
              fullWidth
              onClick={() => onPreviewHandler()}
            >
              <MDTypography variant="b7" color="brown">
                PREVIEW
              </MDTypography>
            </MDButton>
          </MDBox>
        </MDBox>
      </Card>
    </MDBox>
  );
}

export default itemCard;
