/*
 * Purpose: boss_info component
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

// import {Button} from "react-bootstrap";

class BossInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: '',
            post: '',
            info: '',
            company: '',
            salary: ''
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
                <NavBar>Boss Information</NavBar>
                <IconSelector setIcon={this.setIcon}/>
                <InputItem onChange={val => {
                    this.handleChange('post', val)
                }}>Position</InputItem>
                <InputItem onChange={val => {
                    this.handleChange('company', val)
                }}>Company</InputItem>
                <InputItem onChange={val => {
                    this.handleChange('salary', val)
                }}>Salary</InputItem>
                <TextareaItem title='Demand'
                              rows={3}
                              onChange={val => {
                                  this.handleChange('info', val)
                              }}
                />
                <Button type="primary" onClick={this.save}>Save</Button>
                {/*<Button bsStyle='primary' className='col-12'>Save</Button>*/}
            </div>
        )
    }
}

export default connect(
    (state) => ({}),
    {}
)(BossInfo);