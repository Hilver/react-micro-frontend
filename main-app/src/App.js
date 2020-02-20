import React, { Component } from 'react';
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

  componentDidMount() {
    // just test another instance of the Counter
    console.log(this.counterTwoRef.current)
    window.ReactCounter.mount({ title: 'counter two' }, this.counterTwoRef.current);
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
        window.ReactCounter.mount(counterProps, this.counterOneRef.current)
      } else {
        window.ReactCounter.unmount(this.counterOneRef.current)
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
          <div ref={this.counterTwoRef}></div>
          <img onClick={this.toggleCounter} src={logo} className="App-logo" alt="logo" />
          <div ref={this.counterOneRef}></div>
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
