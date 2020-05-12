import TemperatureInput from './playground/components/TemperatureInput';

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById('app'));
