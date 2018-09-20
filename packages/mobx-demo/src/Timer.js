import React, { Component } from 'react';

class Timer extends Component {

  constructor() {
    super();
    this.state = { moment: null };
  }

  render() {
    return <span>{this.state.moment && this.state.moment.toISOString()}</span>;
  }

  componentDidMount() {
    setTimeout(() => this.setState({ moment: new Date() }), 1);
  }
}

export default Timer;
