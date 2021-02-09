import * as ROUTES from './routing/routes'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import App from './components/App'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import createStore from './store'

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
	}
`

const routes = (
  <Provider store={createStore()}>
    <Router>
      <GlobalStyle />
      <App>
        <Switch>
          <Route component={Home} exact path={ROUTES.HOME} />
        </Switch>
      </App>
    </Router>
  </Provider>
)

ReactDOM.render(routes, document.getElementById('root'))
