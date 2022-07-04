// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";

import { Card, Divider } from "@mui/material";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { GET_IMAGE_URL, ELECTRIFIED } from "utils/constants";
import { getTranslationItem } from "utils/functions/axios";

function itemCard(
  group,
  menu,
  item,
  language,
  country,
  setOriginalItem,
  setTranslationItem,
  setItemGroup
) {
  const onEditHandler = async () => {
    // todo: axio
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

          <MDTypography variant="h5">
            {`${menu} #${item.sequence_number + 1}`}
          </MDTypography>
          {item.type === "Template 3" ? (
            <MDTypography variant="body2" color="text" opacity={0.6}>
              No Text
            </MDTypography>
          ) : null}
          {item.type !== "Template 3" &&
            (item.translation_status ? (
              <MDTypography variant="body2" color="text" opacity={0.6}>
                {language}
              </MDTypography>
            ) : (
              <MDTypography variant="body2" color="error">
                UNDEFINED
              </MDTypography>
            ))}
          <Divider />
          <MDBox>
            <MDButton
              color="hyundaiPrimary"
              fullWidth
              disabled={item.type === "Template 3"}
              onClick={() => onEditHandler()}
            >
              <MDTypography variant="h6" color="white">
                EDIT
              </MDTypography>
            </MDButton>
          </MDBox>
          <MDBox pt={1}>
            <MDButton color="hyundaiPrimary" fullWidth>
              <MDTypography variant="h6" color="white">
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
