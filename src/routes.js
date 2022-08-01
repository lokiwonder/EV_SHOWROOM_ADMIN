import SignIn from "layouts/authentication/0000_Signin";
import Dashboard from "layouts/amin/1000_Dashboard";
import SetDisplayVehicle from "layouts/amin/2000_SetDisplayVehicle";
import Translations from "layouts/amin/3000_Translations";
import Download from "layouts/amin/4000_Download";

// @mui icons
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import DashboardIcon from "@mui/icons-material/Dashboard";

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
    name: "Dashboard",
    key: "dashboard",
    route: "/admin/dashboards",
    icon: <DashboardIcon fontSize="medium" />,
    noCollapse: true,
    collapse: [
      {
        name: "Set Display Vehicle",
        key: "Set Display Vehicle",
        route: "/admin/dashboards",
        component: <Dashboard />,
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
        component: <Translations />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Download",
    key: "download",
    route: "/admin/download",
    icon: <FileDownloadRoundedIcon fontSize="medium" />,
    noCollapse: true,
    collapse: [
      {
        name: "Download",
        key: "download",
        route: "/admin/download",
        component: <Download />,
      },
    ],
  },
];

export default routes;
