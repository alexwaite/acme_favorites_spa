import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link
          // className="nav-link"
          className={
            location.href.includes('/users') ? 'nav-link active' : 'nav-link'
          }
          to="/users"
        >
          users
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={
            location.href.includes('/things') ? 'nav-link active' : 'nav-link'
          }
          to="/things"
        >
          things
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
