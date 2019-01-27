/*
*   display all users
* */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  WingBlank,
  WhiteSpace,
  Card
} from "antd-mobile";
import './UsersList.css';

const CardHeader = Card.Header;
const CardBody = Card.Body;


export default class UsersList extends Component {
  //该组件接收一个数据usersList 放到propTypes,规定其类型，最后显示该数据userList
  static propTypes = {
    usersList: PropTypes.array.isRequired
  }

  render() {
    //接收数据
    const {usersList} = this.props;
    return (
      <WingBlank>
        {
          usersList.map(user => (
              <div key={user._id}>
                <WhiteSpace/>
                <Card>
                  {user.icon? <CardHeader
                      thumb={require(`../../assets/icons/${user.icon}.gif`)}
                      extra={user.username}
                  />:null}
                  <CardBody>
                      <div>Position:{user.post}</div>
                      {user.company?<div>Componay:{user.company}</div>:null}
                      {user.salary?<div>Salary:{user.salary}</div>:null}
                      <div>Desription:{user.info}</div>
                  </CardBody>
                </Card>
              </div>
          ))
        }
      </WingBlank>
    )
  }
}