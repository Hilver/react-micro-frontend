import React, { Component } from 'react';

import Counter from './ReactCounter'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    showCounter: false,
    title: 'whoooaa! I\'m title!',
    currentCount: 3
  }

  counterOneRef = React.createRef();
  counterTwoRef = React.createRef();

  toggleCounter = () => this.setState(({showCounter}) => ({showCounter: !showCounter}))

  onTitleChange = (e) => this.setState(({title: e.target.value}))

  onCountUpdate = currentCount => this.setState({currentCount})

  render() {
    const { showCounter, title, currentCount } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <Counter title='counter two' />
          <img onClick={this.toggleCounter} src={logo} className="App-logo" alt="logo" />
          {showCounter 
            && <Counter 
              title={title}
              onCountUpdate={this.onCountUpdate} 
              initialCount={currentCount}
              />}
          <p>
            This is the main App.
          </p>
          <p>
            The count is: {currentCount}
          </p>
          <input type="text" value={title} onChange={this.onTitleChange}/> 
        </header>
      </div>
    );
  }
}

export default App;
