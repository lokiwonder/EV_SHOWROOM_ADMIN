import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";

import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import { Card } from "@mui/material";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import MDButton from "components/MDButton";

import { getCountry } from "utils/functions/country";
import { displaySetup, saveEelctrifiedSettting } from "utils/functions/axios";
import { GET_IMAGE_URL } from "utils/constants";

import CountrySelectorCard from "../3000_Translations/components/CountrySelectCard";

function ElectrifiedSetting() {
  // variable : //
  const [electrifiedAll, setElectrifiedAll] = useState([]);
  const [displayableElectrifies, setDisplayableElectrifies] = useState([]);
  const [electrifiedVersion, setElectrifiedVersion] = useState(0);
  const [rerender, setRerender] = useState(false);
  const [countryInfo, setCountryInfo] = useState(null);

  const cookies = new Cookies();

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
      }
    };

    const country = getCountry(cookies.get("country"));
    setCountryInfo(country);

    setDisplay();
  }, []);

  // component: //
  function electrifiedCard(electrified) {
    return (
      <Grid key={electrified.electrified_item_name} item xs={12} md={6} lg={3}>
        <MDBox mb={3} mt={8}>
          <Card style={{ backgroundColor: "#F6F3F2" }}>
            <MDBox padding="1rem" textAlign="center">
              <MDBox
                component="img"
                src={`${GET_IMAGE_URL}${electrified.main_image}`}
                borderRadius="lg"
                py={2}
                mt={-12}
                height="8rem"
              />
            </MDBox>
            <MDTypography
              px={1}
              color="darkGray"
              lineHeight={1}
              sx={{ mx: 3 }}
              style={{ fontWeight: 500 }}
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
                color="blue"
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
      <MDBox mt={-4} py={1}>
        <MDBox mt={2}>
          <Grid container spacing={1.5}>
            <CountrySelectorCard />
          </Grid>
        </MDBox>
        <MDBox style={{ marginTop: "24px" }}>
          <Card>
            <MDBox style={{ padding: "24px" }}>
              <Grid container space={2}>
                <Grid item xs={6} md={6} lg={6}>
                  <MDBox style={{ display: "flex", itemAligns: "center" }}>
                    {countryInfo && (
                      <MDTypography
                        variant="body1"
                        color="blue"
                        lineHeight={1}
                        style={{ verticalAlign: "middle" }}
                      >
                        Setup Display Vehicle -{" "}
                        <span style={{ color: "#00AAD2" }}>
                          v {electrifiedVersion}
                        </span>
                      </MDTypography>
                    )}
                  </MDBox>
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                  <MDButton
                    style={{ float: "right" }}
                    variant="gradient"
                    color="hyundai_primary_g"
                    onClick={() => onSaveHandler()}
                    size="small"
                  >
                    Save
                  </MDButton>
                </Grid>
              </Grid>
            </MDBox>
            <Divider light />
            <MDBox px={2} py={5}>
              <Grid container spacing={4}>
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
