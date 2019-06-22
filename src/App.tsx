import React from 'react';
import { connect } from 'react-redux';
import { AppState } from './redux/reducer';
import { Greeting } from './redux/types/greeting';

import logo from './assets/logo.svg';
import './styles/App.css';

interface Props {
  greeting: Greeting['greeting'];
}

const App: React.FC<Props> = ({ greeting }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {greeting}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  greeting: state.greeting.greeting,
});

export default connect(mapStateToProps)(App);
