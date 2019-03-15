import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import decode from 'jwt-decode';

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
        userId: null,
        userTopNine: [],
        deleted: false
      },
      newUser: {
        username: '',
        password: ''
      },
    }
  }

  getLogin = (creds) => {
    axios
    .post('https://top9backend.herokuapp.com/api/login', creds)
    .then(res => {
      localStorage.setItem('userToken', res.data.token);
      this.setState({ user: {
        ...this.state.user,
        isLoggedIn: true
      }})
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

  getUser = () => {
    const user = decode(localStorage.getItem('userToken'));
    this.setState({ user: {
      ...this.state.user,
      userId: user.id,
      username: user.username
      } })
  }

  getUserTopNine = () => {
    console.log("We ran getUserTopNine")
    axios.create({ 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('userToken')
      }
     }).get(`https://top9backend.herokuapp.com/api/users/${this.state.user.userId}/topnine`)
     .then(res => {
       this.setState({ user: {
         ...this.state.user,
         userTopNine: res.data
       }})
     })
     .catch(err => console.log(err));
  }

  addToTopNine = (e, position, item) => {
    e.preventDefault();
    const newTopItem = {
      id: item.id,
      category: item.category,
      position: position
    }

    axios.create({ 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('userToken')
      }
    }).post(`https://top9backend.herokuapp.com/api/users/${this.state.user.userId}/topnine`, newTopItem)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  deleteFromTopNine = (e, item) => {
    e.preventDefault();
    axios.create({ 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('userToken')
      }
    }).delete(`https://top9backend.herokuapp.com/api/users/${this.state.user.userId}/topnine/${item.Id}`)
    .then(res => {
      console.log(res);
      this.setState({ user: {
        ...this.state.user,
        deleted: true
      } })
    })
    .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.user.isLoggedIn !== this.state.user.isLoggedIn) {
      this.setState({ user: {
        ...this.state.user,
        loginErr: false
      } });
    }

    if((prevState.user.userId !== this.state.user.userId) || this.state.user.deleted) {
      this.getUserTopNine();
      this.setState({ user: {
        ...this.state.user,
        deleted: false
      } });
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
            <User 
            isLoggedIn={this.state.user.isLoggedIn}
            getUser={this.getUser} 
            getUserTopNine={this.getUserTopNine}
            deleteFromTopNine={this.deleteFromTopNine}
            userId={this.state.user.userId}
            username={this.state.user.username}
            userTopNine={this.state.user.userTopNine}
            />
            </>
          )
        }} />
        <Route path="/" render={() => {
          return(
            this.props.itemList.map((item, index) => <Item item={item} key={index}
              isLoggedIn={this.state.user.isLoggedIn}
              addToTopNine={this.addToTopNine}
            />)
          )}} />
      </div>
    )
  }
}

export default ItemBrowse;