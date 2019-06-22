import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { AppState } from "./redux/reducer";
import { Greeting } from "./redux/types/greeting";
import Loadable from './loadable';

import logo from "./assets/logo.svg";
import "./styles/App.css";

interface Props {
  greeting: Greeting["greeting"];
}

const App: React.FC<Props> = ({ greeting }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{greeting}</p>
        <div className="App-section">
          <Link to="/" className="App-link">
            Home
          </Link>
          <Link to="/about" className="App-link">
            About
          </Link>
        </div>
        <div className="App-section">
          <Switch>
            <Route path="/about" component={Loadable.About} />
            <Route path="/" exact={true} component={Loadable.Home} />
          </Switch>
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  greeting: state.greeting.greeting
});

export default connect(mapStateToProps)(App);
