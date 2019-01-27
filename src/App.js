import React, {Component} from 'react';
import {store} from "./redux/store";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Register from "./containers/register/register";
import Login from "./containers/login/login";
import Main from "./containers/main/main";
import {Provider} from "react-redux";


class App extends Component {
    render() {
        return (
            < Provider store={store}>
                {/*BrowserRouter只在最外层用一次，子路由不需要用上*/}
                < BrowserRouter>
                    {/*each time it will run one route by using switch*/}
                    < Switch>
                        <Route path='/register' component={Register}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route component={Main}></Route>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;