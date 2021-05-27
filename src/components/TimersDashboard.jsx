import React, { Component } from "react";
import EditableTimerList from "./EditableTimerList";
import { StateContext } from "./StateProvider";
// import "../styles/style.css";

class TimersDashboard extends Component {
  static contextType = StateContext;

  render() {
    return (
      <div>
        <EditableTimerList onFormSubmit={this.handleEditFormSubmit} />
      </div>
    );
  }
}

export default TimersDashboard;
