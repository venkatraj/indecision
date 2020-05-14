import React, { Component } from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

class IndecisionApp extends Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDecisionMaking = this.handleDecisionMaking.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options,
    };
  }

  componentDidMount() {
    const optionsJSON = localStorage.getItem('options');
    const options = JSON.parse(optionsJSON);
    if (options) {
      this.setState(() => ({ options }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { options } = this.state;
    if (prevState.options.length !== options.length) {
      const optionsJSON = JSON.stringify(options);
      localStorage.setItem('options', optionsJSON);
    }
  }

  handleDeleteOptions() {
    this.setState({ options: [] });
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove),
    }));
  }

  handleAddOption(optionText) {
    const { options } = this.state;
    if (!optionText) {
      return 'Enter a valid option';
    } else if (options.includes(optionText)) {
      return 'Option already exists';
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(optionText),
    }));
    return null;
  }

  handleDecisionMaking() {
    const { options } = this.state;
    const randomOption = Math.floor(Math.random() * options.length);
    console.log(options[randomOption]);
  }

  render() {
    const { options } = this.state;
    return (
      <div>
        <Header subtitle="Put your life in the handles of a computer!" />
        <Action
          hasOptions={options.length > 0}
          handleDecisionMaking={this.handleDecisionMaking}
        />
        <Options
          options={options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

export default IndecisionApp;
