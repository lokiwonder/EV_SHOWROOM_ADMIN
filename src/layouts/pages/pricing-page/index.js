/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";

// Material Dashboard 2 PRO React examples
import PageLayout from "examples/LayoutContainers/PageLayout";

// Pricing page components
import PricingCards from "layouts/pages/pricing-page/components/PricingCards";

function PricingPage() {
  return (
    <PageLayout>
      <Container>
        <PricingCards prices={100} />
      </Container>
    </PageLayout>
  );
}

export default PricingPage;
