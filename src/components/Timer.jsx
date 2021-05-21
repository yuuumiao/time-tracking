import React, { Component } from 'react'
import { StateContext } from "./StateProvider"
import { millisecondsToReadable } from './helpers'

export class Timer extends Component {
    static contextType = StateContext;

    render() {
     // console.log("runningsince form timer", this.props.runningSince)
      const readableTime = millisecondsToReadable(this.props.runningSince)
        return (
            <div className='ui centered card'>
            <div className='content'>
              <div className='header'>
                {this.props.title}
              </div>
              <div className='meta'>
                {this.props.project}
              </div>
              <div className='center aligned description'>
                <h2>
                    {readableTime}
                  {/* {elapsedString} */}
                </h2>
              </div>
              <div className='extra content'>
                <span className='right floated edit icon'>
                    <button onClick={this.props.openForm}>Edit</button>
                  {/* <i className='edit icon' /> */}
                </span>
                <span className='right floated trash icon'>
                  <button onClick={()=> this.context.removeTimer(this.props.id)}>Delete</button>
                  {/* <i className='trash icon' /> */}
                </span>
              </div>
            </div>
            <div className='ui bottom attached blue basic button'>
                <button onClick={()=>this.context.startTimer(this.props.id)}>Start</button>
            </div>
          </div>
        )
    }
}

export default Timer
