/*
* main route component
* HashRoute only used in the root component
* */

import React, {Component} from 'react';
import {Route, Switch,Redirect} from "react-router-dom";
import BossInfo from '../bossInfo/bossInfo';
import ApplicantInfo from '../applicantInfo/applicantInfo';
import {connect} from 'react-redux';
import Cookie from 'js-cookie';
import{getRedirect} from "../../utils";

class Main extends Component {
   componentDidMount() {
        //有userid,但是redux中没有_id
       const userid = Cookie.get('userid');
       const {_id} = this.props.user;
       if(userid&&!_id){
           //发送异步请求，获取user
       }

   }


    render() {
      //用js-cookie来管理cookie
      const userid = Cookie.get('userid');
      if(!userid){
          return <Redirect to='/login'/>
      }
      const {user} = this.props;

      if(!user._id){
          return null
      }else{
          //获取user路由当中的pathname
          let path = this.props.location.pathname;
          if(path==='/'){
              path = getRedirect(user.type,user.icon);
              return <Redirect to='path'/>
          }
      }
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

export default connect(
    state=>({
        user:state.user
    }),
    {}
)(Main)


/*
* 1 实现自动登陆。 如果cookie中有userid, 发请求获取对应原user. 如果cookie没有userid,重定向进入login界面
* 2 已经登陆，如果请求根路径，根据user的两个值type和icon来计算出一个重定向的路径，自动重定向
* */
