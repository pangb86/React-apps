import React from 'react';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      result: 0,
      num1: "",
      num2: ""
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  add(e) {
    e.preventDefault();
    const result = parseInt(this.state.num1) + parseInt(this.state.num2);
    this.setState({result});
  }

  subtract(e) {
    e.preventDefault();
    const result = this.state.num1 - this.state.num2;
    this.setState({result});
  }

  multiply(e) {
    e.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState({result});
  }

  divide(e) {
    e.preventDefault();
    const result = this.state.num1 / this.state.num2;
    this.setState({result});
  }

  clear(e) {
    e.preventDefault();
    this.setState({num1: "", num2: "", result: 0});
  }

  render() {
    return (
      <div className="calculator-main">
        <h1>{this.state.result}</h1>
        <input
          type="text"
          className="text-input"
          onChange={this.update("num1")}
          value={this.state.num1}
        />
        <input
          type="text"
          className="text-input"
          onChange={this.update("num2")}
          value={this.state.num2}
        />
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
        <button onClick={this.clear}>Clear</button>
      </div>
    );
  }
}

export default Calculator;
