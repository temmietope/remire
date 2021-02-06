import React, { FC } from "react";
// import { Container, Navbar, NavbarBrand } from "reactstrap";
// import Layout from "./Layout";
// import {Route} from 'react-router-dom'
import { Body, GlobalStyle, LayoutWrapper } from "../theme/styles";
import Navbar from "./Navbar";

// const App = ({ children  }: {children?: any}) => (
// 	<div className={'App'}>
// 		<Navbar
// 			color={'light'}
// 			light
// 		>
// 			<NavbarBrand href={'/'}>{'Star Wars Client'}</NavbarBrand>
// 		</Navbar>

// 		<Container className={'pt-5'}>
// 			{children}
// 		</Container>
// 	</div>
// );

interface Props {
  children?: any;
}

const App: FC<Props> = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyle/>
      <Navbar />
      <Body>{children}</Body>
    </LayoutWrapper>
  );
};

export default App;
