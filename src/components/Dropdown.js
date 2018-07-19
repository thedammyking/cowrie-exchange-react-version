import React, { Component } from "react";

export default class Dropdown extends Component {
  state = {
    showDropdown: false
  };

  showDropdown = () => {
    if (this.state.showDropdown) {
      this.setState({
        showDropdown: false
      });
    } else {
      this.setState({
        showDropdown: true
      });
    }
  };
  render() {
    let { label, selected, placeholder, list, onSelect } = this.props;
    return (
      <div className="dropdown">
        {label ? (
          <label htmlFor={label} className="dropdown__label">
            {label}
          </label>
        ) : null}

        <div onClick={() => this.showDropdown()} className="dropdown__select">
          <p>{selected ? selected : placeholder}</p>
          <i className="ion-chevron-down dropdown__icon" />
        </div>
        {this.state.showDropdown ? (
          <div className="dropdown__option-list">
            {list.map((item, index) => {
              return (
                <p
                  key={index}
                  onClick={() => {
                    this.showDropdown();
                    return onSelect ? onSelect(item) : null;
                  }}
                  className="dropdown__option-item"
                >
                  {item}
                </p>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
}
