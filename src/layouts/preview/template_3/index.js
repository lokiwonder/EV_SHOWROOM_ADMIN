import PropTypes from "prop-types";
import "./style.css";

function Template3({ url }) {
  return (
    <div className="template-3-image-box">
      <img
        className="template-3-image template-3-image-animaion"
        alt="full"
        src={url}
      />
    </div>
  );
}

Template3.defaultProps = {
  url: "",
};

Template3.propTypes = {
  url: PropTypes.string,
};

export default Template3;
