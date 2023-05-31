import React from 'react';

export const NavBar: React.FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <strong className="navbar-item is-active">Products</strong>
        </div>
      </div>
    </nav>
  );
};
