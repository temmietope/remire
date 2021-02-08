import * as ROUTES from '../routing/routes';

import { Nav, NavbarWrapper } from '../theme/styles';

import { ReactComponent as BrandIcon } from '../assets/icons/starwars.svg';
import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => (
    <NavbarWrapper>
      <Nav>
        <Link to={ROUTES.HOME}>
          <BrandIcon />
        </Link>
      </Nav>
    </NavbarWrapper>
  );

export default Navbar;
