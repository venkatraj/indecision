import React from 'react';

const Header = (props) => {
  const { title, subtitle } = props;
  return (
    <div className="header">
      <h1 className="header__title">{title}</h1>
      {subtitle && <h2 className="header__subtitle">{subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision App',
};

export default Header;
