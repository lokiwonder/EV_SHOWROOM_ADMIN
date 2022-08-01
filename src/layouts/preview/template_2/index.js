import PropTypes from "prop-types";
import "./style.css";

function Template2({ contents }) {
  return (
    <div className="template-2-container">
      <div>
        {contents.length !== 0 &&
          contents.map((content) => (
            <div className="template-2-item">
              <img
                className="template-2-img template-2-img-animation"
                alt="template-2-img"
                src={content.url}
              />
              <p className="b2 template-2-comment template-2-comment-animation">
                {content.comment}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

Template2.defaultProps = {
  contents: [],
};

Template2.propTypes = {
  contents: PropTypes.array,
};

export default Template2;
