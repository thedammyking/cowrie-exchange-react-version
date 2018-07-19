import React from "react";

const Input = props => {
  let { value, placeholder, onChange } = props;
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      className="input"
      autoComplete="off"
      onChange={({ target }) => (onChange ? onChange(target.value) : null)}
    />
  );
};

export default Input;
