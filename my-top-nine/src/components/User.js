import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import UserItem from './UserItem.js';

const User = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, {props.username}!</h1>
        <p className="lead">This is a List of your Top Nine Things!</p>
        <hr className="my-2" />
        <>
          {props.userTopNine.map((topItem, index) => {
            return(
            <UserItem key={index} userItem={topItem} />
          )})}
        </>
        <p>Happy Browsing!</p>
        <p className="lead">
          <Button color="primary">Sign Out</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default User;