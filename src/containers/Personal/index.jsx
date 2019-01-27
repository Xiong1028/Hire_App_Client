import React,{Component} from 'react';
import {connect} from 'react-redux';
//Modal是模态框
import {Result,List,WhiteSpace,Button,Modal} from "antd-mobile";
import Cookies from 'js-cookie';



const Item = List.Item;
const Brief = Item.Brief;

class Personal extends Component{
    logout = ()=>{
       Modal.alert('Logout','Are you sure to logout?',[
           {text:'Cancel'},
           {
               text:'OK',
               onPress:()=>{
                   //清除cookie userid
                   Cookies.remove('userid');
               }
           }
       ])
    }

    render(){
        const {username,info,icon,company,post,salary} = this.props.user;
        return(
            <div>
            <Result
                img={<img src={require(`../../assets/icons/${icon}.gif`)} style={{width:50} } alt='icon'/>}
                title = {username}
                message={company}
            />

            <List renderHeader= {()=>'Introduction'}>
                <Item multipleLine>
                    <Brief>Position:{post}</Brief>
                    <WhiteSpace/>
                    <Brief>Introduction: {info}</Brief>
                    <WhiteSpace/>
                    {salary?<Brief>Salary:{salary}</Brief>:null}
                </Item>
            </List>
                <WhiteSpace/>
                <List>
                    <Button type='warning' onClick ={this.logout}>Logout</Button>
                </List>
            </div>
        )
    }
}

export default connect(
    state=>({
        user:state.user
    }),
    {}
)(Personal)