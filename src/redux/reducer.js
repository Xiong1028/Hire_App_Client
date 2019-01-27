import {combineReducers} from "redux";
import {AUTH_SUCCESS, ERROR_MSG, RECEIVE_USER, RESET_USER,GET_USERS_LIST} from "./action-types";
import {getRedirect} from '../utils';

//Here定义来从后台api返回的数据结构
const defaultUser = {
    username: '',
    type: '',
    msg: '',
    redirectTo: '' //需要自动重定向的路由路径
}

//user_reducer是用来操作user的
const user = (state = defaultUser, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            let {type, icon} = action.data;//将原state解构出来，然后再将action.data解构出来，同属性覆盖,再添加重定向属性
            return {
                ...action.data,
                redirectTo: getRedirect(type, icon)
            };
        case ERROR_MSG:
            return {
                ...state,
                msg: action.data
            };
        case RECEIVE_USER:
            return {...action.data}
        case RESET_USER:
            return {...defaultUser, msg: action.data};

        default:
            return state;
    }
}

const defaultUsersList = [];

//产生userlist状态的reducer
const usersList = (state = defaultUsersList,action)=>{
    switch(action.type){
        case GET_USERS_LIST:
            return action.data;
        default:
            return state;

    }
}

export default combineReducers({user,usersList})

// reducer的数据结构变成{user:{}.usersList:[]}