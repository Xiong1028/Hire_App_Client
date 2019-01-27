/*
*   Boss UI
* */

import React,{Component} from 'react';
import {connect} from 'react-redux';
import UsersList from "../../components/UserList/UsersList";
import{ getUsersListAction} from "../../redux/actions";

class Boss extends Component{

    componentDidMount() {
        this.props.getUsersListAction('Applicant');
    }

    render(){
        return(
            <div>
                {/*PropTypes规定了必须要传入的属性*/}
               <UsersList usersList={this.props.usersList}/>
            </div>
        )
    }
}

export default connect(
    (state)=>({
        usersList:state.usersList
    }),
    {getUsersListAction}
)(Boss);