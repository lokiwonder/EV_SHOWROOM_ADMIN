import PropTypes from "prop-types";

import HomeIcon from "assets/images/preview/Home.png";
import BarIcon from "assets/images/preview/Bar.png";
import RotationIcon from "assets/images/preview/360.png";
import CalculatorIcon from "assets/images/preview/Calculator.png";
import MenuIcon from "assets/images/preview/Menu.png";

import "./style.css";
import "../common.css";

function Nav({ electrified, pageClass }) {
  return (
    <nav className="nav">
      <div className="nav-left">
        <img className="nav-img" alt="home" src={HomeIcon} />
        <img className="left-bar" alt="bar" src={BarIcon} />
        <h6>{electrified}</h6>
      </div>
      <div className="nav-center">
        <span className="highlights">
          <h6 className={pageClass === "Highlights" ? "active" : "passive"}>
            Highlights
          </h6>
        </span>
        <span className="charging">
          <h6 className={pageClass === "Charging" ? "active" : "passive"}>
            Charging
          </h6>
        </span>
        <span className="benefits">
          <h6 className={pageClass === "Benefits" ? "active" : "passive"}>
            Benefits
          </h6>
        </span>
      </div>
      <div className="nav-right">
        <span className="nav-right-item">
          <img className="nav-img" alt="rotation" src={RotationIcon} />
        </span>
        <span className="nav-right-item">
          <img className="nav-img" alt="calcul" src={CalculatorIcon} />
        </span>
        <span className="nav-right-item">
          <img className="menu-img" alt="menu" src={MenuIcon} />
        </span>
      </div>
    </nav>
  );
}

Nav.defaultProps = {
  electrified: "",
  pageClass: "",
};

Nav.propTypes = {
  electrified: PropTypes.string,
  pageClass: PropTypes.string,
};

export default Nav;
