import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Error from './components/Error';
import Header from './components/Header';
import Freelances from './pages/Freelances/index';
import Home from './pages/Home/index';
import Results from './pages/Results/index';
import Survey from './pages/Survey/index';

const GlobalStyle = createGlobalStyle`
  div {
    font-family: 'Trebuchet MS', 'Helvetica', sans-serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/survey/:questionNumber'>
          <Survey />
        </Route>
        <Route path='/results'>
          <Results />
        </Route>
        <Route path='/freelances'>
          <Freelances />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
