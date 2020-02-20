import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    showCounter: false,
    title: 'whoooaa! I\'m title!'
  }

  componentDidUpdate(prevProps, prevState) {
    const { showCounter, title } = this.state
    const shouldComponentUpdate = 
      prevState.showCounter !== showCounter || prevState.title !== title 
    if(shouldComponentUpdate) {
      if(showCounter) {
        window.ReactCounter.mount({title})
      } else {
        window.ReactCounter.unmount()
      }
    }
  }

  toggleCounter = () => this.setState(({showCounter}) => ({showCounter: !showCounter}))

  onTitleChange = (e) => this.setState(({title: e.target.value})) 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img onClick={this.toggleCounter} src={logo} className="App-logo" alt="logo" />
          <div id="counter-app"></div>
          <p>
            This is the main App. 
          </p>
          <input type="text" value={this.state.title} onChange={this.onTitleChange}/> 
        </header>
      </div>
    );
  }
}

export default App;
