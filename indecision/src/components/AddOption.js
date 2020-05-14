import React, { Component } from 'react';

class AddOption extends Component {
  state = {
    error: null,
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { handleAddOption } = this.props;
    const optionText = e.target.elements.option.value.trim();
    const error = handleAddOption(optionText);
    if (!error) {
      e.target.elements.option.value = '';
    }
    this.setState({ error });
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="option" />
          <input type="submit" value="Add Option" />
        </form>
      </div>
    );
  }
}

export default AddOption;
