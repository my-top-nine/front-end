import React from 'react';
import { Route } from 'react-router-dom';

import { Login } from './Login.js';
import User from './User.js';

export const IsLoggedIn = (props) => {
  if(props.userId) {
    return(
      <Route path="/" render={() => (<User userId={props.userId} getUserId={props.getUserId} />)} />
    )
  } else {
    return(
      <Route path="/" render={() => (<Login getUserId={props.getUserId} />)} />
    )
  }
}