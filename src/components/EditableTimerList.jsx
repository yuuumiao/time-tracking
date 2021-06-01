import React, { Component } from "react";
import EditableTimer from "./EditableTimer";
import Loading from "./Loading";
import { StateContext } from "./StateProvider";
import ToggleableTimerForm from "./ToggleableTimerForm";

export class EditableTimerList extends Component {
  static contextType = StateContext;

  render() {
    if (this.context.isLoading) return <Loading />;
    return (
      <div>
        {this.context.timers.map((timer) => {
          return (
            <EditableTimer
              key={timer.id}
              id={timer.id}
              title={timer.title}
              project={timer.project}
              runningSince={timer.runningSince}
              elapsed={timer.elapsed}
              onFormSubmit={this.props.onFormSubmit}
            />
          );
        })}
        <ToggleableTimerForm />
      </div>
    );
  }
}

export default EditableTimerList;
