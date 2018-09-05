import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar'
import Form from './components/Form'
import Answer from './components/Answer'

class App extends Component {

  state = {
    answer: '', 
    value: '',
    from: '', 
    to: ''

  }

  setAnswer = (answer, props) => {
    this.setState({answer: answer, value: props.value, from: props.from, to: props.to})
  }

  getSign = (currency) => {
    switch (currency) {
      case 'USD':
        return '$'
      case 'EUR':
        return '€'
      case 'SGD':
        return 'S$'
      default:
        return null
    } 
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Form setAnswer={this.setAnswer} getSign={this.getSign}/>
        {this.state.answer ? <Answer getSign={this.getSign} result={this.state}/> : null }
      </div>
    );
  }
}

export default App;
