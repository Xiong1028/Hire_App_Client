/*
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
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import {registerAction} from "../../redux/actions";
import './register.css';
import '../../assets/css/index.css';

const ListItem = List.Item;

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            password2: '',
            type: 'Boss'
        }
    }

    register = () => {
        this.props.registerAction(this.state);
    }

    //refresh the state, Note: properName is variable by using[name]
    handlerChange = (name, val) => {
        this.setState({
            [name]: val
        })
    }
    toLogin = () => {
        this.props.history.replace('/login')
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
                        <InputItem onChange={val => {
                            this.handlerChange('username', val)
                        }}>Username </InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" onChange={val => {
                            this.handlerChange('password', val)
                        }}>Password</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" onChange={val => {
                            this.handlerChange('password2', val)
                        }}>Confirm</InputItem>
                        <WhiteSpace/>
                        <ListItem>
                            <span>User Type</span>
                            &nbsp;&nbsp;
                            <Radio
                                className='radiotype'
                                checked={type === "Boss"}
                                onChange={() => {
                                    this.handlerChange('type', 'Boss')
                                }}
                            >
                                Boss
                            </Radio>
                            &nbsp;&nbsp;
                            <Radio
                                className='radiotype'
                                checked={type === "Applicant"}
                                onChange={() => {
                                    this.handlerChange('type', 'Applicant')
                                }}>
                                Applicant
                            </Radio>
                        </ListItem>
                        <WhiteSpace/>
                        <Button className='btn' type='primary' onClick={this.register.bind(this)}>
                            Sign Up
                        </Button>
                        <WhiteSpace/>
                        <Button className='btn' onClick={this.toLogin}>
                            Sign In
                        </Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        user: state.user
    }),
    {registerAction}
)(Register);

