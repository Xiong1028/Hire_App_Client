/*
* Login Component
* */

import React, {Component} from 'react';
import {
  WingBlank,
  InputItem,
  List,
  WhiteSpace,
  Button
} from 'antd-mobile';
import Logo from '../../components/Logo/logo';
import 'antd-mobile/dist/antd-mobile.css';
import "./login.css";

const ListItem = List.Item;


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  login = () => {
    console.log(this.state);
  }

  //refresh the state, Note: properName is variable by using[name]
  handlerChange = (name, val) => {
    this.setState({
      [name]: val
    })
  }
  toRegister = ()=>{
    this.props.history.replace('/register')
  }

  render() {
    const {type} = this.state;
    return (
      < div>
        <Logo/>
        <WingBlank>
          <List>
            <InputItem  onChange={val => {this.handlerChange('username', val)}}>Username </InputItem>
            <WhiteSpace/>
            <InputItem type="password" onChange={val => {this.handlerChange('password', val)}}>Password</InputItem>
            <WhiteSpace/>
            <WhiteSpace/>
            <Button className='btn' type='primary' onClick={this.login}>Sign In</Button>
            <WhiteSpace/>
            <Button className='btn' onClick={this.toRegister}>Sign Up</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
