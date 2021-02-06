import React, { FC } from "react";
import { LayoutWrapper } from "../theme/styles";
import Navbar from "./Navbar";

interface Props {
  children?: any;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navbar />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
