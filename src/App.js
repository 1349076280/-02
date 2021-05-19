import './App.css';
import React, { Component } from 'react';
// import Home from './views/home'
import { Switch, Redirect, Route } from 'react-router-dom'
import { adminRoutes } from './router/router'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {adminRoutes.map(item => {
            return <Route key={item.path} path={item.path} exact={item.exact} render={routeProps => {
              return <item.component {...routeProps}></item.component>
            }}></Route>
          })}
        </Switch>
        {/* <Home></Home> */}
      </div>
    )
  }
  componentDidMount() {
    console.log(this)
  }
}