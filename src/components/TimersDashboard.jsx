import React, { Component } from 'react'
import EditableTimerList from './EditableTimerList'
import { StateContext } from "./StateProvider"



class TimersDashboard extends Component {
    static contextType = StateContext;

    render() {
        // if(!this.state.timers) return <div>LOADING</div>
        return (
            <div>
                <EditableTimerList 
                    onFormSubmit={this.handleEditFormSubmit}
                />
            </div>
        )
    }
}

export default TimersDashboard
