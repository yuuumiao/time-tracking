import React, { Component } from 'react'
import { StateContext } from "./StateProvider"
import { renderElapsedString } from './helpers'

import "@fontsource/roboto"
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import Divider from '@material-ui/core/Divider';




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
                  {elapsedString}
                </h2>
              </div>
              <div className='extra content'>
                <span className='right floated edit icon'>
                    <EditIcon onClick={this.props.openForm}/>
                </span>
                <span className='right floated trash icon'>
                  <DeleteIcon onClick={()=> this.context.removeTimer(this.props.id)}/>
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
          <Divider />
          </div>
        )
    }
}

export default Timer
