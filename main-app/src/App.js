import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    showCounter: false,
    title: 'whoooaa! I\'m title!',
    currentCount: 3
  }

  componentDidUpdate(prevProps, prevState) {
    const { showCounter, title, currentCount } = this.state
    const shouldComponentUpdate = 
      prevState.showCounter !== showCounter || 
      prevState.title !== title 
    if(shouldComponentUpdate) {
      if(showCounter) {
        const counterProps = {
          title,
          initialCount: currentCount,
          onCountUpdate: this.onCountUpdate
        }
        window.ReactCounter.mount(counterProps)
      } else {
        window.ReactCounter.unmount()
      }
    }
  }

  toggleCounter = () => this.setState(({showCounter}) => ({showCounter: !showCounter}))

  onTitleChange = (e) => this.setState(({title: e.target.value}))

  onCountUpdate = currentCount => this.setState({currentCount})

  render() {
    const { title, currentCount } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img onClick={this.toggleCounter} src={logo} className="App-logo" alt="logo" />
          <div id="counter-app"></div>
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
