/*
* main route component
* HashRoute only used in the root component
* */

import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import BossInfo from '../bossInfo/bossInfo';
import ApplicantInfo from '../applicantInfo/applicantInfo';
import {connect} from 'react-redux';
import Cookies from 'js-cookie';
import {getRedirect} from "../../utils";
import {getUserAction} from "../../redux/actions";
import Applicant from '../Applicant';
import Boss from '../Boss';
import Message from '../Message';
import Personal from '../Personal';
import NotFound from '../../components/NotFound/NotFound';
import {NavBar} from "antd-mobile";
import NavFooter from "../../components/NavFooter/NavFooter";


class Main extends Component {
    //给组件对象添加属性,定义一个数组为了动态获取
    navList = [{ //包含所有导航组件的相关信息数据
        path: '/boss',
        component: Boss,
        title: 'Applicant List',
        icon: 'Applicant',
        text: 'applicant'
    }, {
        path: '/applicant',
        component: Applicant,
        title: 'Boss List',
        icon: 'Boss',
        text: 'boss'
    }, {
        path:'/message',
        component:Message,
        title:'Message',
        icon:'Message',
        text:'message'
    },{
        path:'/personal',
        component:Personal,
        title:'Personal',
        icon:'Personal',
        text:'personal'
    }]

    componentDidMount() {
        //有userid,但是redux中没有_id
        const userid = Cookies.get('userid');
        const {_id} = this.props.user;
        if (userid && !_id) {
            //发送异步请求，获取user
            this.props.getUserAction();
        }
    }


    render() {
        //用js-cookie来管理cookie
        const userid = Cookies.get('userid');
        if (!userid) {
            return <Redirect to='/login'/>
        }
        const {user} = this.props;

        if (!user._id) {
            return null
        } else {
            //获取user路由当中的pathname
            let path = this.props.location.pathname;
            if (path === '/') {
                path = getRedirect(user.type, user.icon);
                return <Redirect to={path}/>
            }
        }

        const{navList} = this;
        const path = this.props.location.pathname; //当前请求路径
        const currentNav = navList.find(nav=>nav.path ===path);

        if(currentNav){
            //哪个路由需要隐藏
            if(user.type==='Boss'){
                //隐藏navList第2个
                navList[1].hide = true;

            }else{
                //隐藏navList第1个
                navList[0].hide = true;
            }
        }


        return (
            <div>

                {currentNav ? <NavBar>{currentNav.title}</NavBar>:null}
                <Switch>
                    {navList.map(nav=><Route path={nav.path} component={nav.component} key={nav.path} />)}
                    <Route path='/bossinfo' component={BossInfo}></Route>
                    <Route path='/applicantinfo' component={ApplicantInfo}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
                {currentNav ?<NavFooter navList={navList}/>:null}
            </div>
        )
    }
}

export default connect(
    state => ({
        user: state.user
    }),
    {getUserAction}
)(Main)


/*
* 1 实现自动登陆。 如果cookie中有userid, 发请求获取对应原user. 如果cookie没有userid,重定向进入login界面
* 2 已经登陆，如果请求根路径，根据user的两个值type和icon来计算出一个重定向的路径，自动重定向
* */
