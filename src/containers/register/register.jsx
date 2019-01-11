/*
<<<<<<< HEAD
* Register route component
* */

import React, {Component} from 'react';
import {
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Radio,
  Button
} from 'antd-mobile';
import Logo from '../../components/Logo/logo';
import 'antd-mobile/dist/antd-mobile.css';

const ListItem = List.Item;


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
    this.state = {
      username: '',
      password1: '',
      password2: '',
      userType: 'Boss'
    }
  }

  register = () => {
    console.log(this.state);
  }

  //refresh the state, Note: properName is variable by using[name]
  handlerChange = (name, val) => {
    this.setState({
      [name]: val
    })
  }
  toLogin = ()=>{
    this.props.history.replace('/login')
  }

  render() {
    const {userType} = this.state;
    return (
      < div>
        <Logo/>
        <WingBlank>
          <List>
            <InputItem  onChange={val => {this.handlerChange('username', val)}}>Username </InputItem>
            <WhiteSpace/>
            <InputItem type="password" onChange={val => {this.handlerChange('password1', val)}}>Password</InputItem>
            <WhiteSpace/>
            <InputItem type="password" onChange={val => {this.handlerChange('username2', val)}}>Confirm</InputItem>
            <WhiteSpace/>
            <ListItem>
              <span>User Type</span>&nbsp;  &nbsp;<Radio checked={userType === "Boss"} onChange={() => {this.handlerChange('userType', 'Boss')}}>Boss</Radio>
              &nbsp;  &nbsp;
              <Radio checked={userType === "Applicant"} onChange={() => {this.handlerChange('userType', 'Applicant')}}>Applicant</Radio>
            </ListItem>
            <WhiteSpace/>
            <Button type='primary' onClick={this.register}>Sign Up</Button>
            <WhiteSpace/>
            <Button onClick={this.toLogin}>Sign In</Button>
          </List>
        </WingBlank>
      </div>
=======
* Register routes
* */

import React, {Component} from 'react';

export default class Register extends Component {
  render() {
    return (
      _ < div > Register < /div>
>>>>>>> 4b75af673064332ee411f4778e763c994995298b
    )
  }
}
