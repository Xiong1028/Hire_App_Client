/*
 * Purpose: applicant_info component
 * Author: xiong
 * Date: Jan 14
*/

import React, {Component} from 'react';
import {connect} from 'react-redux';
import IconSelector from "../../components/Icon-selector/icon-selector";
import {
    NavBar,
    InputItem,
    TextareaItem,
    Button
} from "antd-mobile";

class ApplicantInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: '',
            post: '',
            info: ''
        }
    }

    //更新icon
    setIcon = (icon) => {
        this.setState({
            icon: icon
        })
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    save = () => {
        console.log(this.state);
    }


    render() {
        return (
            <div>
                <NavBar>Applicant Information</NavBar>
                <IconSelector setIcon={this.setIcon}/>
                <InputItem onChange={val => {
                    this.handleChange('post', val)
                }}>Position</InputItem>
                <TextareaItem title='Introduction'
                              rows={3}
                              onChange={val => {
                                  this.handleChange('info', val)
                              }}
                />
                <Button type="primary" onClick={this.save}>Save</Button>
            </div>
        )
    }
}

export default connect(
    (state) => ({}),
    {}
)(ApplicantInfo);