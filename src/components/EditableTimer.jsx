import React, { Component } from 'react'
import Timer from './Timer'
import TimerForm from './TimerForm'

export class EditableTimer extends Component {
    state={
        editFormOpen: false
    }

    closeForm=()=> {
        this.setState({ editFormOpen: false });
    }

    openForm=()=> {
         //console.log(this.state)
        this.setState({ editFormOpen: true })
    }

    render() {
        return (
            <div>
                {this.state.editFormOpen
                ?   
                    <TimerForm 
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    closeForm={this.closeForm}
                    submitText="Edit"
                    />  
                :    
                    <Timer 
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    runningSince={this.props.runningSince}
                    elapsed={this.props.elapsed}
                    openForm={this.openForm}
                    />
                }
              
            </div>
        )
    }
}

export default EditableTimer
