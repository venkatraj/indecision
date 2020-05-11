let isVisible = false;
const handleVisibility = () => {
  isVisible = !isVisible;
  render();
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>Toggle Visibility</h1>
      <button onClick={handleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Details
      </button>
      {isVisible && <p>This is some secret info</p>}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
