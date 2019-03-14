import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import UserItem from './UserItem.js';

const User = (props) => {
  return (
    <div>
      {props.isLoggedIn &&
      <Jumbotron>
        <h1 className="display-3">Hello, ~Need to work on this~!</h1>
        <p className="lead">This is a List of your Top Nine Things!</p>
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