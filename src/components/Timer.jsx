import React, { Component } from 'react'
import { StateContext } from "./StateProvider"
import { renderElapsedString } from './helpers'

import "@fontsource/roboto"
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'



export class Timer extends Component {
    static contextType = StateContext;

    componentDidMount(){
      this.forceUpdateInterval = setInterval(()=> this.forceUpdate(), 5000)
    }

    componentWillUnmount(){
      console.log("willunmount")
      clearInterval(this.forceUpdateInterval)
    }

    render() {
      const elapsedString = renderElapsedString(
        this.props.elapsed ||0, this.props.runningSince||0
      );
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
                    {/* {readableTime} */}
                  {elapsedString}
                </h2>
              </div>
              <div className='extra content'>
                <span className='right floated edit icon'>
                    {/* <button onClick={this.props.openForm}>Edit</button> */}
                    <EditIcon onClick={this.props.openForm}/>
                  {/* <i className='edit icon' /> */}
                </span>
                <span className='right floated trash icon'>
                  {/* <button onClick={()=> this.context.removeTimer(this.props.id)}>Delete</button> */}
                  <DeleteIcon onClick={()=> this.context.removeTimer(this.props.id)}/>
                  {/* <i className='trash icon' /> */}
                </span>
              </div>
            </div>
            <div className='ui bottom attached blue basic button'>
 
                {!!this.props.runningSince? 
                <Button variant="contained" color="primary" onClick={()=>this.context.stopTimer(this.props.id)}>Stop</Button>
                :
                <Button variant="contained" color="primary"onClick={()=>this.context.startTimer(this.props.id)}>Start</Button>
    }

            </div>
          </div>
        )
    }
}

export default Timer
