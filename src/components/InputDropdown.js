import React, { Component } from "react";

export default class InputDropdown extends Component {
  render() {
    let { label, value, selected, placeholder, onChange } = this.props;
    return (
      <div className="input-dropdown">
        {label ? (
          <label htmlFor={label} className="input-dropdown__label">
            {label}
          </label>
        ) : null}

        <div className="input-dropdown__box">
          <div className="input-dropdown__dropdown">
            {selected ? selected : ""}
            <i className="ion-chevron-down input-dropdown__icon" />
          </div>
          <input
            dir="rtl"
            id={label ? label : ""}
            className="input-dropdown__input"
            type="text"
            value={value}
            autoComplete="off"
            placeholder={placeholder ? placeholder : ""}
            onChange={({ target }) =>
              onChange ? onChange(target.value) : null
            }
          />
        </div>
      </div>
    );
  }
}
