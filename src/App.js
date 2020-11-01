
import React, { Component } from 'react';
import Statistics from "./component/Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  goodState = () => {
    console.log(this);
    this.setState((prevState) => ({
      good: prevState.good + 1
    }))
  }

  neutralState = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1
    }))
  }

  badState=()=>{
    this.setState((prevState) => ({
      bad: prevState.bad + 1
    }))
  }

  render() {
    return (
      <>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          goodState={this.goodState}
          neutralState={this.neutralState}
          badState={this.badState}
        />
      </>
    );
  }
}

export default App;



