import React, { Component } from 'react'
import TimerForm from './TimerForm'


export class ToggleableTimerForm extends Component {
    state={
        isOpen: false
    }

    openToggleableForm= ()=> {
        this.setState({isOpen: true})
    }

    closeToggleableForm =()=> {
        this.setState({isOpen:false})
    }

    render() {
        return (
            <div>
                ToggleableTimerForm 
                {this.state.isOpen? 
                <TimerForm 
                submitText='Create'
                closeToggleableForm={this.closeToggleableForm}
                /> 
                : 
                <button onClick={this.openToggleableForm}>add form</button>
                }
            </div>
        )
    }
}

export default ToggleableTimerForm
