import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import UserItem from './UserItem.js';
import { Route, NavLink } from 'react-router-dom';

import AddNewItemForm from './AddNewItemForm';

const User = (props) => {

  if(!props.userId) {
    props.getUser();
  }
  
  return (
    <div>
      {props.isLoggedIn &&
      <Jumbotron>
        <h1 className="display-3">Hello, {props.username}</h1>
        <p className="lead">This is a List of your Top Nine Things!</p>
        {props.userTopNine.map((userItem, index) => {
          return(
          <UserItem key={index} userItem={userItem} deleteFromTopNine={props.deleteFromTopNine} />
        )})}
        <p>Happy Browsing!</p>
        <hr className="my-2" />
        <p className="lead">
          {/* <Button color="primary">Sign Out</Button> */}
        </p>
        <NavLink to="/addNewItemForm">Something Missing?</NavLink>
        <Route path="/addNewItemForm" render={(properties) => {
          return(
            <AddNewItemForm 
            postAddNewItem={props.postAddNewItem}
            {...properties}
            />
          )
        }} />
      </Jumbotron>
      }
    </div>
  );
};

export default User;