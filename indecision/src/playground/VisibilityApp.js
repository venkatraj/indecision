class VisibilityApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
    this.handleVisibility = this.handleVisibility.bind(this);
  }
  handleVisibility() {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
  }
  render() {
    return (
      <div>
        <h1>Toggle Visibility</h1>
        <button onClick={this.handleVisibility}>
          {this.state.isVisible ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.isVisible && <p>This is some secret info</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityApp />, document.getElementById('app'));
