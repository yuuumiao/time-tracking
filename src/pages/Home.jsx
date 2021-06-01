import React, { Component } from "react";
import TimersDashboard from "../components/TimersDashboard";
import "../styles/style.scss";

export class Home extends Component {
  render() {
    return (
      <div>
        <TimersDashboard />
      </div>
    );
  }
}

export default Home;
