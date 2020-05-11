import React, { Component } from 'react';

class AddOption extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      error: null,
    };
  }
  handleFormSubmit(e) {
    e.preventDefault();
    const optionText = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(optionText);
    if (!error) {
      e.target.elements.option.value = '';
    }
    this.setState({ error });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="option" />
          <input type="submit" value="Add Option" />
        </form>
      </div>
    );
  }
}

export default AddOption;
