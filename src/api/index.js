/*
 * Purpose: it creates couples of function for each api. return promise
 * Author:  xiong
*/
import {ajax} from './ajax';

//register api
export const reqRegister = (user) => ajax('/register', user, 'POST');

//login api
export const reqLogin = ({username, password}) => ajax('/login', {username, password}, 'POST');

//update api
export const reqUpdateUser = (user) => ajax('/update', user, 'POST');
