import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(
  <IndecisionApp options={['One', 'Two', 'Three']} />,
  document.getElementById('app')
);
