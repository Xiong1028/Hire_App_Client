/*
 * Purpose: it is a module to launch ajax request and it returns promise
 * Author: xiong
*/
import axios from 'axios';

export const ajax = (url, data = {}, method = 'GET') => {
    if (method === 'GET') {
        //{username:'Tom',password:'123'}
        //paramString: username=Tom&password=123
        let paramsUrl = '';
        Object.keys(data).forEach(key => {
            paramsUrl += key + '=' + data[key] + '&';
        });
        if (paramsUrl) {
            paramsUrl.substring(0, paramsUrl.length - 1);
        }
        return axios.get(url + '?' + paramsUrl);
    } else {
        return axios.post(url, data);
    }
}