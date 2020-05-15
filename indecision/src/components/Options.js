import React from 'react';
import Option from './Option';

const Options = (props) => {
  const { options, handleDeleteOption, handleDeleteOptions } = props;
  return (
    <div>
      <button className="button button--link" onClick={handleDeleteOptions}>
        Remove All
      </button>
      {options.length === 0 && <p>Add some tasks to get started!</p>}
      <ol>
        {options.map((option, index) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={handleDeleteOption}
          />
        ))}
      </ol>
    </div>
  );
};

export default Options;
