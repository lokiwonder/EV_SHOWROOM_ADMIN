import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import MDBox from "components/MDBox";

import Breadcrumbs from "examples/Breadcrumbs";

import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarMobileMenu,
} from "examples/Navbars/DashboardNavbar/styles";

import {
  useMaterialUIController,
  setTransparentNavbar,
  setMiniSidenav,
} from "context";
import MDTypography from "components/MDTypography";

import useDealerStore from "utils/stores/dealer.store";

import { removeAllCookie } from "utils/functions/cookie";
import { Cookies } from "react-cookie";

function DashboardNavbar({ absolute, light, isMini }) {
  const { dealer } = useDealerStore();
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, darkMode } = controller;
  const route = useLocation().pathname.split("/").slice(1);

  const cookies = new Cookies();
  const navigate = useNavigate();

  const onSignoutHandler = () => {
    if (window.confirm("Are you sure you want to sign out?")) {
      removeAllCookie();
      const expires = new Date();
      cookies.set("access_token", "", {
        expires,
      });
      cookies.set("dealerName", "", {
        expires,
      });
      cookies.set("name", "", {
        expires,
      });
      cookies.set("country", "", {
        expires,
      });
      navigate("../admin");
    }
  };

  useEffect(() => {
    // todo: cookie가 존재하지 않는다면 로그인 화면으로 이동
    // if (getJWTCookie === undefined || getDealerCookie === undefined)
    //   navigate("../admin");

    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(
        dispatch,
        (fixedNavbar && window.scrollY === 0) || !fixedNavbar
      );
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);

  // Styles for the navbar icons
  const iconsStyle = ({
    palette: { dark, white, text },
    functions: { rgba },
  }) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;

      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }

      return colorValue;
    },
  });

  useEffect(() => {
    const at = cookies.get("access_token");
    if (!at) navigate("../admin");
  }, []);

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) =>
        navbar(theme, { transparentNavbar, absolute, light, darkMode })
      }
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <MDBox
          color="inherit"
          mb={{ xs: 1, md: 0 }}
          sx={(theme) => navbarRow(theme, { isMini })}
        >
          <Breadcrumbs
            icon="home"
            title={route[route.length - 1]}
            route={route}
            light={light}
          />
        </MDBox>
        {isMini ? null : (
          <MDBox sx={(theme) => navbarRow(theme, { isMini })}>
            <MDTypography
              variant="b4"
              color="blue"
              lineHeight={1}
              sx={{ cursor: "pointer", mx: 3 }}
              onClick={() => onSignoutHandler()}
            >
              {dealer.dealerName}
              <IconButton>
                <KeyboardArrowDownIcon />
              </IconButton>
            </MDTypography>
            <MDBox color={light ? "white" : "inherit"}>
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarMobileMenu}
                onClick={handleMiniSidenav}
              >
                <Icon sx={iconsStyle} fontSize="medium">
                  {miniSidenav ? "menu_open" : "menu"}
                </Icon>
              </IconButton>
            </MDBox>
          </MDBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
