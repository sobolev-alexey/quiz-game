import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import './styles/index.scss';
import GlobalState from './context/globalState';
import { Home, Quiz, Results } from './pages';
import loadFonts from './utils/fonts';

loadFonts();

const App = () => (
  <GlobalState>
    <BrowserRouter>
      <Switch>
        <Route path="/quiz" exact component={Quiz} />
        <Route path="/results" exact component={Results} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </GlobalState>
);

export default App;
