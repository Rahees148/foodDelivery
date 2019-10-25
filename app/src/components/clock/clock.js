import React, { Component } from 'react';
import Toggle from '../toggle/toggle';
class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {
          date: new Date()
        };

      this.stopTicking = this.stopTicking.bind(this);
      this.startTicking = this.startTicking.bind(this);
    }

    componentDidMount() {
        this.startTicking();
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    startTicking(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    stopTicking() {
        clearInterval(this.timerID);
    }

    render() {
      return (
        <div>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <Toggle  stopTicking={this.stopTicking} startTicking={this.startTicking} />
        </div>
      );
    }
  }

  export default Clock;