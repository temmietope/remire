import * as ROUTES from '../routing/routes'

import { Nav, NavbarWrapper } from '../theme/styles'

import { ReactComponent as BrandIcon } from '../assets/icons/starwars.svg'
import { ReactComponent as GithubIcon } from '../assets/icons/github.svg'

import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => (
  <NavbarWrapper>
    <Nav>
      <Link to={ROUTES.HOME}>
        <BrandIcon />
      </Link>
      <a
        href="https://github.com/temmietope/star-wars"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github"
      >
        <GithubIcon className="github" />
      </a>
    </Nav>
  </NavbarWrapper>
)

export default Navbar
