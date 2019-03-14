import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import decode from 'jwt-decode';

import AddNewItemForm from './AddNewItemForm';
import { Login } from './Login';
import User from './User';
import Item from './Item';

import axios from 'axios';

class ItemBrowse extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        username: '',
        password: '',
        isLoggedIn: false,
        loginErr: false,
        userId: null
      },
      newUser: {
        username: '',
        password: ''
      },
      userTopNine: []
    }
  }

  getLogin = (creds) => {
    axios
    .post('https://top9backend.herokuapp.com/api/login', creds)
    .then(res => {
      console.log(res);
      this.setState({ user: {
        ...this.state.user,
        userId: res.data.id,
        isLoggedIn: true
      } })
    })
    .catch(err => {
      console.log(err);
      this.setState({ user: {...this.state.user, loginErr: true} })
    });
  }

  postNewUser = newCreds => {
    axios
    .post('https://top9backend.herokuapp.com/api/register', newCreds)
    .then(res => console.log(res))
    .catch(err => console.log(err));
    this.setState({ user: {
      ...this.state.user,
      loginErr: false
    } })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.user.isLoggedIn !== this.state.user.isLoggedIn) {
      this.setState({ user: {
        ...this.state.user,
        loginErr: false
      } })
    }
  }

  render() {
    return(
      <div>
        <Route path="/" render={() => {
          return(
            <>
            <Login 
              isLoggedIn={this.state.user.isLoggedIn} 
              loginErr={this.state.user.loginErr}
              postNewUser={this.postNewUser} 
              getLogin={this.getLogin} 
            />
            <User isLoggedIn={this.state.user.isLoggedIn} />
            </>
          )
        }} />
        <Route path="/" render={() => {
          return(
            this.props.itemList.map((item, index) => <Item item={item} key={index} />)
          )}} />
        <Link to="/addNewItemForm">Something Missing?</Link>
        <Route exact path="/addNewItemForm" component={AddNewItemForm} />
      </div>
    )
  }
}

export default ItemBrowse;