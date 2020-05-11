class IndecisionApp extends React.Component {
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

IndecisionApp.defaultProps = {
  options: [],
};
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision App',
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
      {props.options.length === 0 && <p>Add some tasks to get started!</p>}
      <ol>
        {props.options.map((option, index) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))}
      </ol>
    </div>
  );
};

const Option = (props) => {
  return (
    <li>
      {props.optionText}
      <button onClick={() => props.handleDeleteOption(props.optionText)}>
        Remove
      </button>
    </li>
  );
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

ReactDOM.render(
  <IndecisionApp options={['One', 'Two', 'Three']} />,
  document.getElementById('app')
);
