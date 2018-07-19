import React from "react";

const NextButton = props => {
  let { onClick } = props;
  return (
    <button
      className="btn next-button"
      onClick={e => {
        e.preventDefault();
        return onClick ? onClick() : null;
      }}
    >
      Next
    </button>
  );
};

export default NextButton;
