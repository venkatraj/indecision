import React from 'react';

const Option = (props) => {
  const { optionText, index } = props;
  return (
    <li className="widget__option">
      {index + 1}. {optionText}
      <button
        className="button button--link"
        onClick={() => props.handleDeleteOption(props.optionText)}
      >
        Remove
      </button>
    </li>
  );
};

export default Option;
