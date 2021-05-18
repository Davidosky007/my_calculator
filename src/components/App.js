/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(btnName) {
    console.log(btnName);
    const newState = calculate(this.state, btnName);
    this.setState(() => ({ ...newState }));
    console.log(newState);
  }

  render() {
    const { total, next } = this.state;
    return (
      <>
        <Display total={total} next={next} />
        {' '}
        <ButtonPanel handleClick={this.handleClick} />
      </>
    );
  }
}

export default App;

// const App = () => (
//   <>
//
//   </>
// );

// export default App;
