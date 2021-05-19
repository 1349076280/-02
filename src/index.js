import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { mainRoutes } from './router/router'

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <HashRouter>
      <Switch>
        <Route path="/admin" render={routeProps => <App {...routeProps}></App>}></Route>
        {mainRoutes.map(item => {
          return <Route key={item.path} {...item}></Route>
        })}
        <Redirect to="404"></Redirect>
      </Switch>
    </HashRouter>
  </ConfigProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
