import React, {Component} from 'react';

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: false};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
      this.state.isToggleOn ? this.props.startTicking() :this.props.stopTicking();
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'start' : 'stop'}
        </button>
      );
    }
  }

export default Toggle;