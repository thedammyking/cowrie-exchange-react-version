import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Converter from "../screens/Converter/Index";
import LandingPage from "../screens/LandingPage/Index";

export default class Main extends Component {
  state = {
    converter: ""
  };

  selectConverter = converter => {
    return this.setState({
      converter
    });
  };

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <LandingPage
              {...props}
              converter={this.state.converter}
              selectConverter={this.selectConverter}
            />
          )}
        />
        <Route
          exact
          path="/converter"
          render={props => (
            <Converter {...props} converter={this.state.converter} />
          )}
        />
      </Switch>
    );
  }
}
