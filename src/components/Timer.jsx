import React, { Component } from "react";
import { StateContext } from "./StateProvider";
import { renderElapsedString } from "./helpers";

import "@fontsource/roboto";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Divider from "@material-ui/core/Divider";

export class Timer extends Component {
  static contextType = StateContext;

  // componentDidMount(){
  //   this.forceUpdateInterval = setInterval(()=> this.forceUpdate(), 5000)
  // }

  // componentWillUnmount(){
  //   clearInterval(this.forceUpdateInterval)
  // }

  render() {
    const elapsedString = renderElapsedString(
      this.props.elapsed || 0,
      this.props.runningSince || 0
    );
    return (
      <div className="Timer">
        <div className="Timer__title">{this.props.title}</div>
        <div className="Timer__project">{this.props.project}</div>
        <div className="Timer__time">{elapsedString}</div>
        <div className="Timer__icons">
          <EditIcon className="Timer__icon" onClick={this.props.openForm} />
          <DeleteIcon
            className="Timer__icon"
            onClick={() => this.context.removeTimer(this.props.id)}
          />
        </div>
        <div className="Timer__startStop">
          {!!this.props.runningSince ? (
            <Button
              className="Timer__buttonStop"
              variant="contained"
              color="primary"
              onClick={() => this.context.stopTimer(this.props.id)}
            >
              Stop
            </Button>
          ) : (
            <Button
              className="Timer__buttonStart"
              variant="contained"
              color="primary"
              onClick={() => this.context.startTimer(this.props.id)}
            >
              Start
            </Button>
          )}
        </div>
        <Divider className="Timer__divider" />
      </div>
    );
  }
}

export default Timer;
