import React from "react";
import apiHandler from "../api/apiHandler";

export const StateContext = React.createContext();

export class StateProvider extends React.Component {
    state = {
        timers:[],
        isLoading: false,
    };
  
    componentDidMount() {
      apiHandler
        .getAllTimers()
        .then((data) => {
          this.setState({ timers: data, isLoading: false });
        })
        .catch((error) => {
        //   this.setState({ isLoggedIn: false, isLoading: false });
            console.log(error)
        });
    }

    createTimer = (timer) => {
        apiHandler
            .createOneTimer(timer)
            .then((res) => this.setState({timers: [...this.state.timers, res]}))
            .catch((error) => this.setState({isLoading: false }));
    }

    updateTimer = (infos) => {
        apiHandler
            .updateOneTimer(infos.id,infos)
            .then((data) => 
              this.setState({
                timers: this.state.timers.map((timer) => {
                  if (timer.id === infos.id) {
                    return Object.assign({}, timer, {
                      title: infos.title,
                      project: infos.project,
                    });
                  } else {
                    return timer;
                  }
                }),
              }))
            .catch((error) => this.setState({isLoading: false }))
    }

    removeTimer = (timerId) => {
        apiHandler
        .deleteOneTimer(timerId)
        .then(() =>  
          this.setState({
            timers: this.state.timers.filter(t => t.id !== timerId)
          }))    
        .catch((error) => this.setState({isLoading: false }))
    };

    startTimer = (timerId) => {
      const now = Date.now()
      apiHandler
        .updateOneTimer(timerId, {runningSince: now})
        .then((data) => this.setState({
        timers: this.state.timers.map((timer) => {
          return timer.id === timerId ? data : timer
        })
      })
      )
    }

  
    render() {
      const contextValue = {
        isLoggedIn: this.state.isLoggedIn,
        isLoading: this.state.isLoading,
        timers: this.state.timers,
        createTimer: this.createTimer,
        updateTimer: this.updateTimer,
        removeTimer: this.removeTimer,
        startTimer :this.startTimer
      };
  
      return (
        <StateContext.Provider value={contextValue}>
          {this.props.children}
        </StateContext.Provider>
      );
    }
  }
  
  