import App from "./components/App";
import Home from "./components/Home";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import createStore from "./store";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ROUTES from "./routing/routes";

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
	}
`;

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
);

ReactDOM.render(routes, document.getElementById("root"));
