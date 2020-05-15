import React from 'react';

const Option = (props) => {
  const { optionText } = props;
  return (
    <li>
      {optionText}
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
