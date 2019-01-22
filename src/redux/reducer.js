import {combineReducers} from "redux";
import {AUTH_SUCCESS, ERROR_MSG, RECERIVE_USER, RESET_USER} from "./action-types";
import {getRedirect} from '../utils';

//Here定义来从后台api返回的数据结构
const defaultUser = {
    username: '',
    type: '',
    msg: '',
    redirectTo: '' //需要自动重定向的路由路径
}

const user = (state = defaultUser, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            const {type, icon} = action.data;
            //将原state解构出来，然后再将action.data解构出来，同属性覆盖,再添加重定向属性
            return {
                ...action.data,
                redirectTo: getRedirect(type, icon)
            };
        case ERROR_MSG:
            return {
                ...state,
                msg: action.data
            };
        case RECERIVE_USER:
            return action.data;
        case RESET_USER:
            return {...defaultUser,msg:action.data};

        default:
            return state;
    }
}

export default combineReducers({user})
