import {combineReducers} from "redux";
import {AUTH_SUCCESS, ERROR_MSG} from "./action-types";

//Here定义来从后台api返回的数据结构
const defaultUser = {
    username: '',
    type: 'Boss',
    msg: '',
    redirectTo: '' //需要自动重定向的路由路径
}

const user = (state = defaultUser, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            //将原state解构出来，然后再将action.data解构出来，同属性覆盖,再添加重定向属性
            return {
                ...action.data,
                redirectTo: '/'
            };
        case ERROR_MSG:
            return {
                ...state,
                msg: action.data
            };
        default:
            return state
    }
}

export default combineReducers({user})

/**
  *    if(user.type && user.header) => which route should be used?
  *     user.false ==true
  *     /boss: user.type == 'boss'
  *     /applicant: user.type == 'applicant'
  *
  *     user.icon == false
  *     /bossinfo: user.type=='boss'
  *     /applicantinfo: user.type =='applicant'
  *
  */

const getRedirect = ({type, icon}) => {
    let path = '';
    if (type === "boss") {
        icon
            ? path = '/boss'
            : path = '/bossinfo';
    } else {
        icon
            ? path = '/applicant'
            : path = '/applicantinfo';
    }
    return path;
}