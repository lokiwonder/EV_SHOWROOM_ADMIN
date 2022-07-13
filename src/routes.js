import SetDisplayVehicle from "layouts/amin/electrifiedSetting";
import Translation from "layouts/amin/translation";
// import PricingPage from "layouts/pages/pricing-page";
import SignIn from "layouts/authentication/sign-in/basic";

// @mui icons
import Icon from "@mui/material/Icon";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";

const routes = [
  {
    type: "none",
    name: "Sign In",
    key: "sign in",
    collapse: [
      {
        name: "SignIn",
        key: "sign in",
        route: "/admin",
        component: <SignIn />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Setup Display Vehicle",
    key: "Setup Display Vehicle",
    route: "/admin/setDisplayVehicle",
    icon: <DirectionsCarRoundedIcon fontSize="medium" />,
    noCollapse: true,
    collapse: [
      {
        name: "Set Display Vehicle",
        key: "Set Display Vehicle",
        route: "/admin/setDisplayVehicle",
        component: <SetDisplayVehicle />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Translations",
    key: "Translations",
    route: "/admin/translations",
    icon: <ArticleRoundedIcon fontSize="medium" />,
    noCollapse: true,
    collapse: [
      {
        name: "Translation",
        key: "translation",
        route: "/admin/translations",
        component: <Translation />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Download",
    key: "Download",
    icon: <Icon fontSize="medium">download</Icon>,
    collapse: [
      // {
      //   name: "ELECTRIFED",
      //   key: "ELECTRIFED",
      //   route: "/admin/electrifiedDownload",
      //   component: <PricingPage />,
      // },
      // {
      //   name: "POWERTRAIN",
      //   key: "POWERTRAIN",
      //   route: "/admin/powertrainDownload",
      //   component: <PricingPage />,
      // },
      // {
      //   name: "CONNECTIVITY",
      //   key: "CONNECTIVITY",
      //   route: "/admin/connectivityDownload",
      //   component: <PricingPage />,
      // },
      // {
      //   name: "TOTAL",
      //   key: "TOTAL",
      //   route: "/admin/totalDownload",
      //   component: <PricingPage />,
      // },
    ],
  },
];

export default routes;
