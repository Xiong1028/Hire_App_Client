import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import {HashRouter, Route, Switch} from "react-router-dom";
import Register from './containers/register/register';
import Login from './containers/login/login';
import Main from './containers/main/main';
import {Provider} from 'react-redux';
import {store} from './redux/store.js';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      {/*each time it will run one route by using switch*/}
      <Switch>
        <Route path='/register' component={Register}></Route>
        <Route path='/login' component={Login}></Route>
        {/*All the router goes here */}
        <Route component={Main}></Route>
      </Switch>
    </HashRouter>
  </Provider>, document.getElementById("root"));
=======
import {Button} from "react-bootstrap";

ReactDOM.render(<Button className='col-12' bsStyle="success">Primary</Button>, document.getElementById("root"));
>>>>>>> 4b75af673064332ee411f4778e763c994995298b
