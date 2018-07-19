import React, { Component } from "react";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";

export default class Ntc extends Component {
  state = {
    slide: 1,
    animation: "enter-right",
    xlmAmount: "",
    ngnAmount: "",
    xlmAddress: "",
    memoInput: "",
    depositeReference: ""
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
      case "xlmAmount":
        return this.setState({
          xlmAmount: params.value
        });
      case "ngnAmount":
        return this.setState({
          ngnAmount: params.value
        });
      case "xlmAddress":
        return this.setState({
          xlmAddress: params.value
        });
      case "memoInput":
        return this.setState({
          memoInput: params.value
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
    return <div className="ntc">{this.getSlide()}</div>;
  }
}
