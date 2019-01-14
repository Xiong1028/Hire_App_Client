import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from "react-router-dom";
import Register from './containers/register/register';
import Login from './containers/login/login';
import Main from './containers/main/main';
import {Provider} from 'react-redux';
import {store} from './redux/store.js';

ReactDOM.render(
  <Provider store={store}>
      {/*HashRouter只在最外层用一次，子路由不需要用上*/}
    <HashRouter>
      {/*each time it will run one route by using switch*/}
      <Switch>
        <Route path='/register' component={Register}></Route>
        <Route path='/login' component={Login}></Route>
        {/*All the router goes here */}
        <Route component={Main}></Route>
      </Switch>
    </HashRouter>
  </Provider>, document.getElementById("root")
);
