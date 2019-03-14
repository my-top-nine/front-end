import React from 'react';
import { Route } from 'react-router-dom';

import { Login } from './Login.js';
import User from './User.js';

export const IsLoggedIn = (props) => {
  if(props.userId) {
    return(
      <Route 
      path="/" 
      render={() => (<User 
        userId={props.userId}
        userTopNine={props.userTopNine}
        username={props.username}
        />)} 
      />
    )
  } else {
    return(
      <Route path="/" render={() => (<Login getUserId={props.getUserId} />)} />
    )
  }
}