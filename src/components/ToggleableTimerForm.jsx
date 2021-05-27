import React, { Component } from "react";
import TimerForm from "./TimerForm";

import AddIcon from "@material-ui/icons/Add";

export class ToggleableTimerForm extends Component {
  state = {
    isOpen: false,
  };

  openToggleableForm = () => {
    this.setState({ isOpen: true });
  };

  closeToggleableForm = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <div>
        {this.state.isOpen ? (
          <TimerForm
            submitText="Create"
            closeToggleableForm={this.closeToggleableForm}
          />
        ) : (
          <AddIcon onClick={this.openToggleableForm} />
        )}
      </div>
    );
  }
}

export default ToggleableTimerForm;
