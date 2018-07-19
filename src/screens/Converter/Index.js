import React, { Component } from "react";
import Ctn from "./ctn/Index";
import Ntc from "./ntc/Index";

export default class Converter extends Component {
  state = {
    converter: ""
  };

  componentWillMount() {
    if (!this.state.converter) {
      this.setState({
        converter: this.props.converter
      });
    }
  }
  handleConverter = () => {
    let { converter } = this.state;
    if (converter === "ctn") {
      return <Ctn {...this.props} />;
    } else if (converter === "ntc") {
      return <Ntc {...this.props} />;
    } else {
      return this.props.history.replace("/");
    }
  };
  render() {
    return (
      <main>
        <section className="section-converter">
          {this.handleConverter()}
        </section>
      </main>
    );
  }
}
