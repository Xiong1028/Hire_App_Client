/*
 * Purpose: this component is used to select user icons
 * Author: xiong
 * Date: Jan,14
*/
import React, {Component} from 'react';
import {List, Grid} from 'antd-mobile';
// 利用模块prop-types来进行pros管理
import PropTypes from 'prop-types';
import './icon-selector.css';

export default class IconSelector extends Component {

    //声明该函数从props中来的
    static propTypes = {
        setIcon:PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        //准备需要显示的数据
        this.headerList = [];
        for (let i = 0; i < 16; i++) {
            this.headerList.push({
                text: `icon_${i+1}`,
                icon: require(`./icons/icons_${i + 1}.gif`) //这里不能使用import
            })
        }
        this.state={
            icon:null
        }
    }

    handClick = ({text,icon})=>{
        //refresh its state
        this.setState({
            icon:icon
        })

        //And refresh the parent component state
        this.props.setIcon(text);
    }

    render() {
        const listHeader = !this.state.icon?'Please choose your icon':(
            <div className='icon_title'>
                You've already choosen:<img src={this.state.icon} />
            </div>
        );
        return (
            <List renderHeader={() => listHeader}>
                <Grid
                    data={this.headerList}
                    columnNum={4}
                    onClick = {this.handClick}
                />
            </List>
        )
    }
}