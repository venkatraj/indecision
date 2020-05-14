import React from 'react';

const Action = (props) => {
  const { hasOptions, handleDecisionMaking } = props;
  return (
    <div>
      <button disabled={!hasOptions} onClick={handleDecisionMaking}>
        What Should I Do?
      </button>
    </div>
  );
};

export default Action;
