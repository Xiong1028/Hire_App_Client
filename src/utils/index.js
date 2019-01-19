
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

export const getRedirect = (type, icon) => {
    let path = '';
    if (type === "boss") {
        icon ? path = '/boss' : path = '/bossinfo';
    } else {
        icon ? path = '/applicant' : path = '/applicantinfo';
    }
    return path;
}