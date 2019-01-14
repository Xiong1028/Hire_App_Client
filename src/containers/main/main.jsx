/*
* main route component
* HashRoute only used in the root component
* */

import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import BossInfo from '../bossInfo/bossInfo';
import ApplicantInfo from '../applicantInfo/applicantInfo';


export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/bossinfo' component={BossInfo}></Route>
          <Route path='/applicantinfo' component={ApplicantInfo}></Route>
        </Switch>
      </div>
    )
  }
}
