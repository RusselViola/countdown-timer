import React, { Component } from 'react'

export default class Clock extends Component {

  formatSeconds(totalSeconds) {
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);

    return minutes + ':' + seconds;
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}
