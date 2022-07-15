import { Card, Grid } from "@mui/material";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import {
  DOWNLOAD_WINDOWS_TEXT,
  DOWNLOAD_MAC_TEXT,
  CONNECTIVTY,
  EVSHOWROOM,
  POWERTRAIN,
  ELECTRIFIED,
} from "utils/constants";
import { getDownloadIcon } from "utils/functions/download";

function ElectrifiedSetting() {
  // variable : //

  // function: //
  // description: //

  // component: //
  function downloadItem(type) {
    return (
      <Grid key={type} item xs={12} md={6} xl={3}>
        <MDBox style={{ display: "flex", justifyContent: "center" }}>
          <MDBox mb="24px">
            <MDBox
              width="180px"
              height="180px"
              component="img"
              src={getDownloadIcon(type)}
            />
            <MDTypography mt="28px" variant="b8" color="darkgray">
              {type}
            </MDTypography>
            <MDTypography mt="16px" variant="b7" color="activeBlue">
              {DOWNLOAD_WINDOWS_TEXT}
            </MDTypography>
            <MDTypography mt="16px" variant="b7" color="activeBlue">
              {DOWNLOAD_MAC_TEXT}
            </MDTypography>
          </MDBox>
        </MDBox>
      </Grid>
    );
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Card>
          <MDBox p="24px">
            <MDTypography variant="h6" color="darkgray">
              Download
            </MDTypography>
            <Grid container mt="24px">
              {downloadItem(ELECTRIFIED)}
              {downloadItem(POWERTRAIN)}
              {downloadItem(CONNECTIVTY)}
              {downloadItem(EVSHOWROOM)}
            </Grid>
          </MDBox>
        </Card>
      </MDBox>
    </DashboardLayout>
  );
}

export default ElectrifiedSetting;
