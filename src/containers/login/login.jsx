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
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import {loginAction} from "../../redux/actions";

const ListItem = List.Item;


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  login = () => {
    this.props.loginAction(this.state);
  }

  //refresh the state, Note: properName is variable by using[name]
  handleChange = (name, val) => {
    this.setState({
      [name]: val
    })
  }

  toRegister = ()=>{
    this.props.history.replace('/register')
  }

  render() {
    const {type} = this.state;
    const {msg,redirectTo} = this.props.user;
    //如果redirectTo有值，需要重定向到指定的路由上去
    if(redirectTo){
      return <Redirect to={redirectTo}/>
    }
    return (
      < div>
        <Logo/>
        <WingBlank>
          <List>
            {msg ? <div className='error-msg'>{msg}</div> : null}
            <InputItem  onChange={val => {this.handleChange('username', val)}}>Username </InputItem>
            <WhiteSpace/>
            <InputItem type="password" onChange={val => {this.handleChange('password', val)}}>Password</InputItem>
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

export default connect(
    (state)=>({
      user:state.user,
    }),
    {loginAction}
)(Login)