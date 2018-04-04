import React, { Component } from "react";
import { render } from "react-dom";
import CitiesList from "./CitiesList";
import cities from "./cities";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Cities",
      cities: []
    };
  }

  componentDidMount() {
    const { data } = cities;
    console.log("CDM Checkin", this.state.cities);
    this.setState({ cities: data });
  }

  render() {
    console.log("Render Called: ", this.state.cities);
    return <CitiesList name={this.state.name} cities={this.state.cities} />;
  }
}

render(<App />, document.getElementById("root"));
