import React, { Component } from 'react'
import header from './header.jpg'
import './App.css'

import UserView from 'components/userView'
import PostList from 'components/postList'

import { Provider } from 'react-redux'
import configureStore from './store'

import { HashRouter, Route } from 'react-router-dom'

const View = () => (
  <div className="App">
    <header className="App-header">
      <img src={header} className="header-image" alt="logo" />
    </header>
    <h2>Llamando el WORDPRESS REST API</h2>
    <UserView />
    <PostList />
  </div>
)

class App extends Component {
  render() {
    const store = configureStore()
    return (
      <Provider store={store}>
        <HashRouter>
          <Route path="/" component={View} />
        </HashRouter>
      </Provider>
    )
  }
}

export default App;
