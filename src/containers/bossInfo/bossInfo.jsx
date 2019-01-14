/*
 * Purpose: boss_info component
 * Author: xiong
 * Date: Jan 14
*/

import React,{Component} from 'react';
import {connect} from 'react-redux';
import IconSelector from "../../components/Icon-selector/icon-selector";
import{
    NavBar,
    InputItem,
    TextareaItem,
    Button
} from "antd-mobile";
// import {Button} from "react-bootstrap";

class BossInfo extends Component{
    render(){
        return(
            <div>
                <NavBar>Boss Information</NavBar>
                <IconSelector/>
                <InputItem>Position</InputItem>
                <InputItem>Company</InputItem>
                <InputItem>Salary</InputItem>
                <TextareaItem title='Demand'
                                rows={3}
                />
                <Button type="primary">Save</Button>
                {/*<Button bsStyle='primary' className='col-12'>Save</Button>*/}
            </div>
        )
    }
}

export default connect(
    (state)=>({}),
    {}
)(BossInfo);