import React from "react";

const FormHint = props => {
  let [text1, text2, text3] = props.traits;
  return (
    <div className="form-hint">
      <p className="form-hint__text">{text1}</p>
      <p className="form-hint__text">{text2}</p>
      <p className="form-hint__text">{text3}</p>
    </div>
  );
};

export default FormHint;
