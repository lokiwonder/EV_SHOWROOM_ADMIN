import { Autocomplete, Card, Grid } from "@mui/material";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import FormField from "layouts/pages/account/components/FormField";
import { TMP_COUNTRY } from "utils/constants";

import PropTypes from "prop-types";

function CountrySelectorCard({ setter }) {
  const onCountryHandler = (e, v) => setter(v.name);
  return (
    <Grid item sm={12} lg={3}>
      <Card>
        <MDBox p={3}>
          <MDTypography pt={1} variant="h6">
            Select Country
          </MDTypography>
          <Autocomplete
            onChange={(event, value) => onCountryHandler(event, value)}
            options={TMP_COUNTRY}
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

CountrySelectorCard.defaultProps = {
  setter: () => {},
};

CountrySelectorCard.propTypes = {
  setter: PropTypes.func,
};

export default CountrySelectorCard;
