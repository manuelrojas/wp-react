import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserView from 'components/userView'

import { Provider } from 'react-redux'
import configureStore from './store'

const View = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <UserView />
  </div>
)

class App extends Component {
  render() {
    const store = configureStore()
    return (
      <Provider store={store}>
        <View />
      </Provider>
    );
  }
}

export default App;
