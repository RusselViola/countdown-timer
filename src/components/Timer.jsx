import React, { Component } from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      timerStatus: 'stopped'
    };
  }

  handleStatusChange(newTimerStatus) {
    console.log(newTimerStatus);
  }


  render() {
    let {count, timerStatus} = this.state;
    return (
      <div>
        <h1 className="page-title">Time That Shit!</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    )
  }
}
