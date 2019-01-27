/*
*   Applicant UI
* */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import UsersList from "../Boss";
import{ getUsersListAction} from "../../redux/actions";

class Applicant extends Component {
  componentDidMount() {
    this.props.getUsersListAction('Boss');
  }

  render() {
    return (
        <div>
          {/*PropTypes规定了必须要传入的属性*/}
          <UsersList usersList={this.props.usersList}/>
        </div>
    )
  }
}

export default connect(
    (state) => ({
      usersList:state.usersList
    }),
    {getUsersListAction}
)(Applicant);