/*
 * Purpose: some action for react
 * Author: xiong
 * Date: 09/1
*/
import {
    reqRegister,
    reqLogin
} from '../api';

import {AUTH_SUCCESS, ERROR_MSG} from "./action-types";


const authSuccess = (user) => ({
    type: AUTH_SUCCESS,
    data: user
})

const errMsg = (msg) => ({
    type: ERROR_MSG,
    data: msg
})


//Async action
//use redux, async request goes here
export const registerAction = (user) => {
    const {username, password, password2, type} = user;
    //发送异步的action之前要进行表单验证
    if (!username) {
        return errMsg("username can not be empty");
    } else if (password !== password2) {
        return errMsg("passwords are not the same");
    } else {
        return async dispatch => {
            /* reqRegister(user).then(res=>{
                 const result = res.data
             })*/

            //异步获取返回ajax请求返回数据
            const response = await reqRegister({username, password, type});
            const result = response.data;

            console.log(result);

            // 将返回数据dispatch到store -> reducer
            if (!result.code) {
                dispatch(authSuccess(result.data));
            } else {
                dispatch(errMsg(result.msg));
            }
        }
    }
}

export const loginAction = (user) => {
    const {username, password} = user;

    //发送异步的action之前要进行表单验证
    if (!username) {
        return errMsg("username can not be empty");
    } else if (!password) {
        return errMsg("password can not be empty");
    } else {
        //发送异步请求，在发送之前可进行数据的校验
        return async dispatch => {
            //await to server
            const response = await reqLogin(user);
            //get data from server
            const result = response.data;
            if (result.code) {
                //dispatch to reducer
                dispatch(authSuccess(result.data))
            } else {
                dispatch(errMsg(result.msg))
            }
        }
    }
}