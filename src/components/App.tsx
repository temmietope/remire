import { Body, GlobalStyle, LayoutWrapper } from '../theme/styles'
import React, { FC } from 'react'

import Navbar from './Navbar'

interface Props {
  children?: any
}

const App: FC<Props> = ({ children }) => (
  <LayoutWrapper>
    <GlobalStyle />
    <Navbar />
    <Body>{children}</Body>
  </LayoutWrapper>
)

export default App
