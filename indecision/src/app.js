class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDecisionMaking = this.handleDecisionMaking.bind(this);
    this.state = {
      options: ['One', 'Two'],
    };
  }
  handleDeleteOptions() {
    this.setState({ options: [] });
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
        <Header
          title="Indecision App"
          subtitle="Put your life in the handles of a computer!"
        />
        <Action
          hasOptions={this.state.options.length > 0}
          handleDecisionMaking={this.handleDecisionMaking}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handleDecisionMaking}>
        What Should I Do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      <ol>
        {props.options.map((option, index) => (
          <Option key={index} optionText={option} />
        ))}
      </ol>
    </div>
  );
};

const Option = (props) => {
  return <li>{props.optionText}</li>;
};

class AddOption extends React.Component {
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
