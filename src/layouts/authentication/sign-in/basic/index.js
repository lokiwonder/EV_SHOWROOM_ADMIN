// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDAlert from "components/MDAlert";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.png";
import logo from "assets/images/hyundai_logo.png";
import { Grid } from "@mui/material";
import { useState } from "react";

// util
// import { isValidPassword } from "utils/functions/validation";
import { signin } from "utils/functions/axios";
import { useNavigate } from "react-router-dom";
// store
import useDealerStore from "utils/stores/dealer.store";
// import { getJWTCookie } from "utils/functions/cookie";

function Basic() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [alertFlag, setAlertFlag] = useState(false);
  // const [loginFlag, setLoginFlag] = useState(false);

  const { setDealer } = useDealerStore();

  const onIdHandelr = (e) => setId(e.target.value);
  const onPwHandelr = (e) => setPassword(e.target.value);

  const onSignInHandler = async () => {
    const { result, dealerName, name, country } = await signin(id, password);
    if (!result) {
      setAlertFlag(true);
    } else {
      setDealer({ dealerName, name, country });
      navigate("../admin/electrifiedSetting");
    }
  };

  const alertContent = () => (
    <MDTypography variant="body2" color="white">
      You entered the wrong{" "}
      <MDTypography
        component="a"
        href="#"
        variant="body2"
        fontWeight="medium"
        color="white"
      >
        ID
      </MDTypography>{" "}
      or{" "}
      <MDTypography
        component="a"
        href="#"
        variant="body2"
        fontWeight="medium"
        color="white"
      >
        password
      </MDTypography>
      . Please check your input again.
    </MDTypography>
  );

  // useEffect(() => {
  //   if (getJWTCookie) navigate("../admin/electrifiedSetting");
  // }, []);

  return (
    <BasicLayout image={bgImage}>
      <Card style={{ opacity: 0.85 }}>
        <MDBox
          variant="gradient"
          bgColor="hyundai_primary_g"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDBox
            mt={2}
            component="img"
            src={logo}
            height="100%"
            position="relative"
            zIndex={1}
          />
          <MDTypography variant="h6" fontWeight="medium" color="white" mt={1}>
            EV SHOWROOM Admin
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <Grid
              container
              spacing={1}
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <MDBox mt={2} mb={4}>
                  <MDInput
                    type="text"
                    label="id"
                    onChange={onIdHandelr}
                    fullWidth
                  />
                </MDBox>
                <MDBox mb={4}>
                  <MDInput
                    type="password"
                    label="Password"
                    onChange={onPwHandelr}
                    fullWidth
                  />
                </MDBox>
                <Grid
                  mt={4}
                  mb={4}
                  container
                  spacing={1}
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                >
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <MDButton
                      variant="gradient"
                      color="hyundai_primary_g"
                      size="large"
                      fullWidth
                      onClick={onSignInHandler}
                    >
                      sign in
                    </MDButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {alertFlag && (
              <MDAlert color="error">{alertContent("error")}</MDAlert>
            )}
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
