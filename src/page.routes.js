// @mui material components
import Icon from "@mui/material/Icon";

const pageRoutes = [
  {
    name: "pages",
    columns: 3,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "dashboards",
        icon: <Icon>dashboard</Icon>,
        collapse: [
          {
            name: "electrifiedSetting",
            route: "/dashboards/analytics",
          },
          {
            name: "sales",
            route: "/dashboards/sales",
          },
        ],
      },
    ],
  },
  {
    name: "authenticaton",
    collapse: [
      {
        name: "sign in",
        dropdown: true,
        icon: <Icon>login</Icon>,
        collapse: [
          {
            name: "basic",
            route: "/authentication/sign-in/basic",
          },
          {
            name: "cover",
            route: "/authentication/sign-in/cover",
          },
          {
            name: "illustration",
            route: "/authentication/sign-in/illustration",
          },
        ],
      },
    ],
  },
];

export default pageRoutes;
