import React, { Component } from "react";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";

export default class Ctn extends Component {
  state = {
    slide: 1,
    animation: "enter-left",
    bank: "",
    xlmAmount: "",
    ngnAmount: "",
    acctNumber: "",
    acctInfo: ""
  };

  set = params => {
    switch (params.state) {
      case "slide":
        return this.setState({
          slide: params.value
        });
      case "animation":
        return this.setState({
          animation: " "
        });
      case "bank":
        return this.setState({
          bank: params.value
        });
      case "xlmAmount":
        return this.setState({
          xlmAmount: params.value
        });
      case "ngnAmount":
        return this.setState({
          ngnAmount: params.value
        });
      case "acctNumber":
        return this.setState({
          acctNumber: params.value
        });
      case "acctInfo":
        return this.setState({
          acctInfo: params.value
        });
      default:
        break;
    }
  };

  getSlide = () => {
    let { history } = this.props;
    let { slide } = this.state;
    switch (slide) {
      case 1:
        return <Slide1 {...this.state} history={history} set={this.set} />;
      case 2:
        return <Slide2 {...this.state} set={this.set} history={history} />;
      case 3:
        return <Slide3 {...this.state} set={this.set} history={history} />;
      default:
        break;
    }
  };

  render() {
    return <div className="ctn">{this.getSlide()}</div>;
  }
}
