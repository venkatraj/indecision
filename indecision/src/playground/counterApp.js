class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleDecrement() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  handleReset() {
    this.setState({ count: 0 });
  }

  handleIncrement() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleDecrement}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
        <button onClick={this.handleIncrement}>+1</button>
      </div>
    );
  }
}

CounterApp.defaultProps = {
  count: 0,
};

ReactDOM.render(<CounterApp />, document.getElementById('app'));
