import React, { Component } from "react";
import { StateContext } from "../components/StateProvider";
import Loading from "../components/Loading";
import TimersDashboard from "../components/TimersDashboard";
import "../styles/style.scss";

class Home extends Component {
  static contextType = StateContext;

  render() {
    if (this.context.isLoading) return <Loading />;

    return (
      <div>
        <TimersDashboard />
      </div>
    );
  }
}

export default Home;
