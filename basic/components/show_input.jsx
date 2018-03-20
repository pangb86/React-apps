import React from 'react';

class ShowInput extends React.Component {
  constructor() {
    super();
    this.state = {
      display: ""
    };
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  render() {
    return (
      <div className="show-input-main">
        <h1 className="show-input-header">
          This component displays the value in the text box as you type.
        </h1>
        <input
          type="text"
          onChange={this.update('display')}
          className='text-input'
        />
      <div className="show-name-display">{this.state.display}</div>
      </div>
    );
  }
}

export default ShowInput;
