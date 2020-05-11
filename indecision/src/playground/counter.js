let count = 0;
const incrementHandler = () => {
  console.log('incrementHandler');
  count++;
  render();
};

const decrementHandler = () => {
  console.log('decrementHandler');
  count--;
  render();
};

const resetHandler = () => {
  console.log('resetHandler');
  count = 0;
  render();
};

const appRoot = document.getElementById('app');

const render = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={decrementHandler}>-1</button>
      <button onClick={resetHandler}>Reset</button>
      <button onClick={incrementHandler}>+1</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};

render();
