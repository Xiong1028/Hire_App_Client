import React, {Component} from 'react';
import {TabBar} from 'antd-mobile';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import './NavFooter.css';
const Item = TabBar.Item;

//希望在非路由组件中使用路由库的api
//withRouter()
class NavFooter extends
Component {
    static propTypes = {
        navList: PropTypes.array.isRequired
    }
    render() {
        let {navList} = this.props;
        //过滤掉hide为true的nav
        navList = navList.filter(nav=>!nav.hide);

        //请求的path,只有路由组件才有这个location属性
        const path = this.props.location.pathname;
        return (
            <TabBar>
                {navList.map((nav, index) => (
                    <Item key={index} title={nav.title}
                    icon = {{uri:require(`./icons/${nav.icon}.png`)}}
                    selectedIcon={{uri:require(`./icons/${nav.icon}.png`)}}
                    selected={path === nav.path}
                    onPress ={()=>this.props.history.replace(nav.path)}
                    >
                    </Item>
                ))}
            </TabBar>
        )
    }
}

//用withRoute()包装非路由组件,就可以传入location
//内部会向组件传入一些路由组件特有的属性：history/location/path math
export default withRouter(NavFooter);