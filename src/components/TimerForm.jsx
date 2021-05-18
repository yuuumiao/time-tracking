import React, { Component } from 'react'
import { StateContext } from "./StateProvider"


export class TimerForm extends Component {
  static contextType = StateContext;

    state={
        title: this.props.title || "",
        project: this.props.project || "" 
    }


    handleChange = (e) => {
        const key = e.target.name
        this.setState({[key]: e.target.value})
    }

    handleSubmitTimerForm = () => {
        if(this.props.submitText==='Edit'){
            this.context.updateTimer({
              id: this.props.id,
              title: this.state.title,
              project: this.state.project
              })
            this.props.closeForm()
        }else if(this.props.submitText==='Create'){
          this.context.createTimer({
              title: this.state.title,
              project: this.state.project
          })
         this.props.closeToggleableForm()
        }
    }

    handleCancelTimerForm =()=> {
      this.props.submitText==='Edit'? this.props.closeForm() : this.props.closeToggleableForm()
    }

    render() {
        return (
            <div className='ui centered card'>
            <div className='content'>
              <div className='ui form'>
                <div className='field'>
                  <label htmlFor="title">Title</label>
                  <input name="title" id="title" type='text' value={this.state.title} onChange={this.handleChange}/>
                </div>
                <div className='field'>
                  <label htmlFor="project">Project</label>
                  <input name="project" id="project" type='text' value={this.state.project} onChange={this.handleChange}/>
                </div>
                <div className='ui two bottom attached buttons'>
                  <button className='ui basic blue button' onClick={this.handleSubmitTimerForm}>
                      {this.props.submitText}
                  </button>
                  <button className='ui basic red button' onClick={this.handleCancelTimerForm}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default TimerForm
