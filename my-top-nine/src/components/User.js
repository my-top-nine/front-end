import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import UserItem from './UserItem.js';

const User = (props) => {

  console.log(props)
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
          <UserItem key={index} userItem={userItem} />
        )})}
        <hr className="my-2" />
        <p>Happy Browsing!</p>
        <p className="lead">
          <Button color="primary">Sign Out</Button>
        </p>
      </Jumbotron>
      }
    </div>
  );
};

export default User;