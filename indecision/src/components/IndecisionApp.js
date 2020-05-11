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
    if (prevState.options.length !== this.state.options.length) {
      const optionsJSON = JSON.stringify(this.state.options);
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
    if (!optionText) {
      return 'Enter a valid option';
    } else if (this.state.options.includes(optionText)) {
      return 'Option already exists';
    } else {
      this.setState((prevState) => ({
        options: prevState.options.concat(optionText),
      }));
      return null;
    }
  }
  handleDecisionMaking() {
    const randomOption = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomOption]);
  }
  render() {
    return (
      <div>
        <Header subtitle="Put your life in the handles of a computer!" />
        <Action
          hasOptions={this.state.options.length > 0}
          handleDecisionMaking={this.handleDecisionMaking}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

export default IndecisionApp;
