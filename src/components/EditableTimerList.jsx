import React, { Component } from 'react'
import EditableTimer from './EditableTimer'
import { StateContext } from "./StateProvider"
import ToggleableTimerForm from './ToggleableTimerForm';

export class EditableTimerList extends Component {
    static contextType = StateContext;

    render() {
        return (
            <div>
                {this.context.timers.map(timer => {
                    return <EditableTimer 
                    key={timer.id}
                    id={timer.id}
                    title={timer.title}
                    project={timer.project}
                    runningSince={timer.runningSince}
                    elapsed={timer.elapsed}
                    onFormSubmit={this.props.onFormSubmit}
                    />
                })}
                <ToggleableTimerForm />
            </div>
        )
    }
}

export default EditableTimerList
