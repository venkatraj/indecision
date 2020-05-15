import React from 'react';
import Option from './Option';

const Options = (props) => {
  const { options, handleDeleteOption, handleDeleteOptions } = props;
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button className="button button--link" onClick={handleDeleteOptions}>
          Remove All
        </button>
      </div>
      {options.length === 0 && <p>Add some tasks to get started!</p>}
      <ol>
        {options.map((option, index) => (
          <Option
            key={option}
            index={index}
            optionText={option}
            handleDeleteOption={handleDeleteOption}
          />
        ))}
      </ol>
    </div>
  );
};

export default Options;
