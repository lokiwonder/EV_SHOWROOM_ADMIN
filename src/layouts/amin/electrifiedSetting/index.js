// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Images
import { Card } from "@mui/material";
import { useEffect, useState } from "react";
import { displaySetup, saveEelctrifiedSettting } from "utils/functions/axios";
import { GET_IMAGE_URL } from "utils/constants";
import MDButton from "components/MDButton";
import { useNavigate } from "react-router-dom";
import { getCountry } from "utils/functions/country";
import { getCountryCookie } from "utils/functions/cookie";

function ElectrifiedSetting() {
  // variable : //
  const [electrifiedAll, setElectrifiedAll] = useState([]);
  const [displayableElectrifies, setDisplayableElectrifies] = useState([]);
  const [electrifiedVersion, setElectrifiedVersion] = useState(0);
  const [rerender, setRerender] = useState(false);
  const [countryInfo, setCountryInfo] = useState({});

  const navigate = useNavigate();

  // function: //
  // description: //
  const onSwitchHandler = (item) => {
    const idx = displayableElectrifies.indexOf(item);
    const arr = displayableElectrifies;
    if (idx === -1) {
      arr.push(item);
      setDisplayableElectrifies(arr);
    } else {
      arr.splice(idx, 1);
      setDisplayableElectrifies(arr);
    }
    setRerender(!rerender);
  };

  const onSaveHandler = async () => {
    const display = await saveEelctrifiedSettting(
      displayableElectrifies,
      electrifiedVersion
    );
    if (display.result) {
      setDisplayableElectrifies(display.displayableElectrifies);
      setElectrifiedVersion(display.electrified_version);
    }
    setRerender(!rerender);
  };

  useEffect(() => {
    const setDisplay = async () => {
      const display = await displaySetup();
      if (display.result) {
        setElectrifiedAll(display.electrifiedAll);
        setDisplayableElectrifies(display.displayableElectrifies);
        setElectrifiedVersion(display.electrified_version);
      } else {
        navigate("../admin");
      }
    };
    const country = getCountry(getCountryCookie);

    setCountryInfo(country);
    setDisplay();

    return () => setCountryInfo({});
  }, []);

  // component: //
  function electrifiedCard(electrified) {
    return (
      <Grid key={electrified.electrified_item_name} item xs={12} md={6} lg={4}>
        <MDBox mb={3} mt={15}>
          <Card style={{ backgroundColor: "#F6F3F2" }}>
            <MDBox padding="1rem" textAlign="center">
              <MDBox
                component="img"
                src={`${GET_IMAGE_URL}${electrified.main_image}`}
                borderRadius="lg"
                py={2}
                mt={-15}
                height="12rem"
              />
            </MDBox>
            <MDTypography
              px={1}
              variant="h4"
              color="hyundaiPrimary"
              lineHeight={1}
              sx={{ cursor: "pointer", mx: 3 }}
            >
              {electrified.electrified_item_name}
            </MDTypography>
            <Divider />
            <MDBox px={2} mb={2}>
              <Switch
                value={electrified.electrified_item_name}
                checked={
                  displayableElectrifies.indexOf(
                    electrified.electrified_item_name
                  ) !== -1
                }
                onClick={() =>
                  onSwitchHandler(electrified.electrified_item_name)
                }
              />
            </MDBox>
          </Card>
        </MDBox>
      </Grid>
    );
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={1}>
        <MDBox mt={1}>
          <Card>
            <MDBox px={2} mt={2}>
              <Grid container space={2}>
                <Grid item xs={6} md={6} lg={6}>
                  <MDTypography
                    variant="body1"
                    color="hyundaiPrimary"
                    lineHeight={1}
                    sx={{ mx: 3 }}
                  >
                    {`${countryInfo.name} (${countryInfo.enName}) - electrified version: ${electrifiedVersion}`}
                  </MDTypography>
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                  <MDButton
                    style={{ float: "right" }}
                    variant="gradient"
                    color="hyundai_primary_g"
                    onClick={() => onSaveHandler()}
                  >
                    Save
                  </MDButton>
                </Grid>
              </Grid>
            </MDBox>
            <MDBox px={2} py={5} minHeight="80vh">
              <Grid container spacing={3}>
                {electrifiedAll &&
                  electrifiedAll.map((electrified) =>
                    electrifiedCard(electrified)
                  )}
              </Grid>
            </MDBox>
          </Card>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default ElectrifiedSetting;
