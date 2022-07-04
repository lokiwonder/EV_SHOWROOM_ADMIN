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
