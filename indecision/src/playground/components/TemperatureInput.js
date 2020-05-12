import React from 'react';
import BoilingVerdict from './BoilingVerdict';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }
  render() {
    const { temperature } = this.state;
    const { scale } = this.props;
    return (
      <div>
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input type="text" value={temperature} onChange={this.handleChange} />
          <BoilingVerdict celsius={temperature} />
        </fieldset>
      </div>
    );
  }
}

export default TemperatureInput;
