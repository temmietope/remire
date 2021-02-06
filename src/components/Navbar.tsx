import React from "react";
import { Nav, NavbarWrapper } from "../theme/styles";
import { ReactComponent as BrandIcon } from "../assets/icons/starwars.svg";
import { Link } from "react-router-dom";
import * as ROUTES from "../routing/routes";
const Navbar = () => {
  return (
    <NavbarWrapper>
      <Nav>
        <Link to={ROUTES.HOME}>
          <BrandIcon />
        </Link>
      </Nav>
    </NavbarWrapper>
  );
};

export default Navbar;
