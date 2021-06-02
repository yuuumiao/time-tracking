import React, { Component } from "react";
import EditableTimerList from "./EditableTimerList";
import { StateContext } from "./StateProvider";
import Loading from "./Loading";

class TimersDashboard extends Component {
  static contextType = StateContext;

  render() {
    if (this.context.isLoading) return <Loading />;

    return (
      <div>
        <EditableTimerList onFormSubmit={this.handleEditFormSubmit} />
      </div>
    );
  }
}

export default TimersDashboard;
