import React, { Component } from 'react'
import { StateContext } from "./StateProvider"

import "@fontsource/roboto"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'



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
                  {/* <label htmlFor="title">Title</label>
                  <input name="title" id="title" type='text' value={this.state.title} onChange={this.handleChange}/> */}
                  <TextField name="title" id="title" type='text' value={this.state.title} onChange={this.handleChange} label="Title" variant="outlined" />
                </div>
                <div className='field'>
                  {/* <label htmlFor="project">Project</label>
                  <input name="project" id="project" type='text' value={this.state.project} onChange={this.handleChange}/> */}
                  <TextField name="project" id="project" type='text' value={this.state.project} onChange={this.handleChange} label="Project" variant="outlined" />

                </div>
                <div className='ui two bottom attached buttons'>
                  <Button variant="outlined" color="primary" onClick={this.handleSubmitTimerForm}>
                      {this.props.submitText}
                  </Button>
                  <Button variant="outlined" color="primary" onClick={this.handleCancelTimerForm}>
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
                  <Divider />
          </div>
        )
    }
}

export default TimerForm
