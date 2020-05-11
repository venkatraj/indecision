const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer!',
  options: [],
};

const handleFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value.trim();
  if (option && !app.options.includes(option)) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

const handleRemoveAll = () => {
  app.options.length = 0;
  renderApp();
};

const handleDecisionMaking = () => {
  const randomOption = Math.floor(Math.random() * app.options.length);
  alert(app.options[randomOption]);
};

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
      <h1>{`${app.title}!`}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>
        {app.options && app.options.length > 0
          ? 'Here are your options'
          : 'No options'}
      </p>
      <button
        disabled={0 === app.options.length}
        onClick={handleDecisionMaking}
      >
        What Should I Do?
      </button>
      <button onClick={handleRemoveAll}>Remove All</button>
      <ol>
        {app.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ol>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="option" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
