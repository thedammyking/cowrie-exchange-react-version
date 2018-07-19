import React from "react";
import { Link } from "react-router-dom";

const BackBtn = props => {
  let { slide, set, history } = props;
  return (
    <div className="row">
      <div
        onClick={async () => {
          if (set) {
            handleBack(slide, set, history);
          }
        }}
        className="BackBtn"
      >
        <Link to="#" className="BackBtn__text">
          <i className="ion-chevron-left BackBtn__icon" /> Back
        </Link>
      </div>
    </div>
  );
};

const handleBack = (slide, fn, obj) => {
  switch (slide) {
    case 3:
      return fn({ state: "slide", value: 2 });
    case 2:
      return fn({ state: "slide", value: 1 });
    case 1:
      return obj.replace("/");
    default:
      break;
  }
};

export default BackBtn;
