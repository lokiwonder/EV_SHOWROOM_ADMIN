import ElectrifiedSetting from "layouts/amin/electrifiedSetting";
import Translation from "layouts/amin/translation";
// import PricingPage from "layouts/pages/pricing-page";
import SignIn from "layouts/authentication/sign-in/basic";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "none",
    name: "SignIn",
    key: "signin",
    collapse: [
      {
        name: "Electrified Setting",
        key: "Electrified Setting",
        route: "/admin",
        component: <SignIn />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Admin",
    key: "admin",
    icon: <Icon fontSize="medium">dashboard</Icon>,
    collapse: [
      {
        name: "Electrified Setting",
        key: "electrifiedSetting",
        route: "/admin/electrifiedSetting",
        component: <ElectrifiedSetting />,
      },
      {
        name: "Translation",
        key: "translation",
        route: "/admin/translation",
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
