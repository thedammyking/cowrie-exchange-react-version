import React, { Component } from "react";
import CallToAction from "../../components/CallToAction";
import SpotLight from "../../components/SpotLight";
import Partners from "../../components/Partners";

export default class LandingPage extends Component {
  state = {
    leave: false
  };

  setLeave = () => {
    if (this.state.leave) {
      return this.setState({
        leave: false
      });
    } else {
      return this.setState({
        leave: true
      });
    }
  };
  render() {
    return (
      <main
        className={`${
          this.state.leave
            ? this.props.converter === `ctn`
              ? `leave-right`
              : `leave-left`
            : `adjustfooter`
        }`}
      >
        <CallToAction {...this.props} setLeave={this.setLeave} />
        <SpotLight />
        <Partners />
      </main>
    );
  }
}
