import React from "react";

const InputCta = props => {
  let { label, disable, value, placeholder, action, onClick, onChange } = props;
  return (
    <div className="input-cta">
      {label ? (
        <label htmlFor={label} className="input-cta__label">
          {label}
        </label>
      ) : null}
      <div className="input-cta__box">
        <input
          type="text"
          placeholder={placeholder}
          className="input-cta__input"
          value={value}
          autoComplete="off"
          disabled={disable}
          onChange={({ target }) => (onChange ? onChange(target.value) : null)}
        />
        <div
          onClick={() => (onClick ? onClick() : null)}
          className="input-cta__btn"
        >
          {action}
        </div>
      </div>
    </div>
  );
};

export default InputCta;
