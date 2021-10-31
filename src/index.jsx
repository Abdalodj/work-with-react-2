import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error from './components/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import Freelances from './pages/Freelances/index';
import Home from './pages/Home/index';
import Profile from './pages/Profile/index';
import Results from './pages/Results/index';
import Survey from './pages/Survey/index';
import { SurveyProvider, ThemeProvider } from './utils/context';
import GlobalStyle from './utils/style/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
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
            <Route
              path='/profile/:id'
              render={(props) => <Profile {...props} />}
            ></Route>
            <Route path='*'>
              <Error />
            </Route>
          </Switch>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
