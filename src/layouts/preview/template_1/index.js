import PropTypes from "prop-types";
import { UNDEFINED, GET_IMAGE_URL } from "utils/constants";
import TempVideo from "assets/images/preview/TempVideo.png";
import NewWindow from "react-new-window";

import "./style.css";
import "../common.css";

import Nav from "../nav";

function Template1({
  electrified,
  title,
  comment,
  description,
  pageClass,
  seq,
  image,
  videoImage,
  pageLength,
  setFlag,
}) {
  //        variable        //
  //        variable        //

  //        function        //
  //        function        //
  return (
    <NewWindow
      title="preview"
      features={{
        outerHeight: "1080px",
        outerWidth: "1920px",
      }}
      onUnload={() => setFlag(false)}
    >
      <div className="container">
        <div className="contents-container">
          <div>
            <h2 className="title">{title !== "" ? title : UNDEFINED}</h2>
            <p className="b2 comment">{comment !== "" ? comment : UNDEFINED}</p>
            {description !== "none" && (
              <p className="b4 description">
                {description !== "" ? description : UNDEFINED}
              </p>
            )}
          </div>
          <div className="contents-bottom">
            {pageClass !== "Highlights" && (
              <div className="page_number">
                <h2 className="primary-blue">
                  {seq + 1}
                  <span className="page-lenght">{` / ${pageLength}`}</span>
                </h2>
              </div>
            )}
            {videoImage && (
              <div className="video_img_container-animation">
                <h6 className="primary-blue">How to charge</h6>
                <img
                  className="video-thumb-img-open"
                  alt="thumbnail"
                  src={TempVideo}
                />
              </div>
            )}
          </div>
        </div>
        <div className="img-container-animation">
          <img className="img" alt="content" src={`${GET_IMAGE_URL}${image}`} />
        </div>
      </div>
      <Nav electrified={electrified} pageClass={pageClass} />
    </NewWindow>
  );
}

Template1.defaultProps = {
  electrified: "",
  title: "",
  comment: "",
  description: "",
  pageClass: "",
  seq: 0,
  pageLength: 0,
  image: "",
  videoImage: "",
  setFlag: () => {},
};

Template1.propTypes = {
  electrified: PropTypes.string,
  title: PropTypes.string,
  comment: PropTypes.string,
  description: PropTypes.string,
  pageClass: PropTypes.string,
  seq: PropTypes.number,
  pageLength: PropTypes.number,
  image: PropTypes.string,
  videoImage: PropTypes.string,
  setFlag: PropTypes.func,
};

export default Template1;
