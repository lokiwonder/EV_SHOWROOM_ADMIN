import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import DataTable from "examples/Ta/bles/DataTable";

import CountrySelectorCard from "../3000_Translations/components/CountrySelectCard";

function ElectrifiedSetting() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={-4} py={1}>
        <MDBox mt={2}>
          <Grid container spacing={1.5}>
            <CountrySelectorCard />
          </Grid>
        </MDBox>
        <MDBox style={{ marginTop: "24px" }}>
          <MDTypography variant="b7" color="darkGray">
            Current Version
          </MDTypography>
          <Grid container mt="20px">
            <Grid item pr="12px" mb="24px" md={6} xl={3}>
              <Card>
                <MDBox px="24px" py="16px">
                  <MDTypography variant="b7" color="deepGray">
                    App Version
                  </MDTypography>
                  <MDTypography mt="10px" variant="b7" color="darkGray">
                    v 0.10
                  </MDTypography>
                </MDBox>
              </Card>
            </Grid>
            <Grid item pr="12px" mb="24px" md={6} xl={3}>
              <Card>
                <MDBox px="24px" py="16px">
                  <MDTypography variant="b7" color="deepGray">
                    Asset Version
                  </MDTypography>
                  <MDTypography mt="10px" variant="b7" color="darkGray">
                    v 0.10
                  </MDTypography>
                </MDBox>
              </Card>
            </Grid>
            <Grid item pr="12px" mb="24px" md={6} xl={3}>
              <Card>
                <MDBox px="24px" py="16px">
                  <MDTypography variant="b7" color="deepGray">
                    Display Vehicle Version
                  </MDTypography>
                  <MDTypography mt="10px" variant="b7" color="darkGray">
                    v 0.10
                  </MDTypography>
                </MDBox>
              </Card>
            </Grid>
            <Grid item pr="12px" mb="24px" md={6} xl={3}>
              <Card>
                <MDBox px="24px" py="16px">
                  <MDTypography variant="b7" color="deepGray">
                    Translations Version
                  </MDTypography>
                  <MDTypography mt="10px" variant="b7" color="darkGray">
                    v 0.10
                  </MDTypography>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
          <Grid container>
            <Grid pr="12px" xl={6}>
              tmp
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default ElectrifiedSetting;
