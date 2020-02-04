import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = () => {
  return(
      <ul className="nav-links">
          <li>
              <NavLink to="/" exact>all users</NavLink>
          </li>
          <li>
              <NavLink to="/u1/places">my places</NavLink>
          </li>
          <li>
              <NavLink to="/places/new">add places</NavLink>
          </li>
          <li>
              <NavLink to="/auth">log in</NavLink>
          </li>
      </ul>
  );
};

export default NavLinks;
