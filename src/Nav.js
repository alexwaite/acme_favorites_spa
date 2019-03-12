import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link className="nav-link" to="/users">
          users
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/things">
          things
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
