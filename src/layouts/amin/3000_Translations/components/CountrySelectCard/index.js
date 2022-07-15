import { Cookies } from "react-cookie";

import { Autocomplete, Card, Grid } from "@mui/material";

import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";

import FormField from "layouts/pages/account/components/FormField";
import { TMP_COUNTRY } from "utils/constants";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getCountryDefaultValue } from "utils/functions/country";

function CountrySelectorCard() {
  const cookie = new Cookies();
  const [defaultCountry] = useState(
    getCountryDefaultValue(cookie.get("country"))
  );

  useEffect(() => {
    // const country = ;
    // setDefaultCountry();
    // console.log(country);
    // console.log(defaultCountry);
  }, []);

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
            Region
          </MDTypography>
          <Autocomplete
            mx={1}
            readOnly
            options={TMP_COUNTRY}
            defaultValue={defaultCountry}
            renderInput={(params) => (
              <FormField
                {...params}
                label="Region"
                InputLabelProps={{ shrink: true }}
              />
            )}
          />
        </MDBox>
      </Card>
    </Grid>
  );
}

CountrySelectorCard.defaultProps = {
  setter: () => {},
};

CountrySelectorCard.propTypes = {
  setter: PropTypes.func,
};

export default CountrySelectorCard;
