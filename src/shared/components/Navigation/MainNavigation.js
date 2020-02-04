import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from 'shared/components/Navigation/MainHeader';

import './MainNavigation.css';
import NavLinks from 'shared/components/Navigation/NavLinks';
import SideDrawer from 'shared/components/Navigation/SideDrawer';
import Backdrop from "shared/components/UIElements/Backdrop";

const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const handleOpening = () => {
    setDrawerIsOpen(prevState => !prevState);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={handleOpening}/>}
      {drawerIsOpen && (
        <SideDrawer>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={handleOpening}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Globetrotter</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
