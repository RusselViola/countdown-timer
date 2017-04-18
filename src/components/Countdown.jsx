import React, { Component } from 'react';
import Clock from 'Clock';
import CountdownFrom from 'CountdownForm';

export default class Countdown extends Component {
  

  handleSetCountDown() {

  }

  render() {
    return (
      <div>
        <Clock totalSeconds={129}/>
        <CountdownForm
          onSetCountdown={this.handleSetCountdown}
        />
      </div>
    )
  }
}
