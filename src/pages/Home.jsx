import React, { Component } from 'react'
import TimersDashboard from '../components/TimersDashboard'

export class Home extends Component {
    render() {
        return (
            <div>
                <h1>Hello the home</h1>
                <TimersDashboard />
            </div>
        )
    }
}

export default Home
