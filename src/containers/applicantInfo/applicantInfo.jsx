/*
 * Purpose: applicant_info component to fullfil the applicant information
 * Author: xiong
 * Date: Jan, 14
*/

import React, {Component} from 'react';
import {connect} from 'react-redux';

class ApplicantInfo extends Component {
    render() {
        return (
            <div>Applicantinfo</div>
        )
    }
}

export default connect(
    (state) => ({}),
    {}
)(ApplicantInfo);
