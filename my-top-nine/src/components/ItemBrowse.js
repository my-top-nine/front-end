import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import decode from 'jwt-decode';


import Item from './Item.js';

import { IsLoggedIn } from './IsLoggedIn';
import axios from 'axios';

class ItemBrowse extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        username: '',
        id: null
      },
      userTopNine: []
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if((this.state.user.id !== null) && this.state.user.id !== prevState.user.id) {
      this.getUserTopNine();
    }
  }

  getUserId = (username) => {
    const token = localStorage.getItem('userToken');
    const tokenInfo = decode(token);
    this.setState({ user: {
      ...this.state.user,
      username: username,
      id: tokenInfo.id
    }});
  }

  getUserTopNine = () => {
    axios
    .get(`http://my-top-nine.herokuapp.com/api/users/${this.state.user.id}/favorites`)
    .then(res => {
      this.setState({ userTopNine: res.data });
    })
    .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <IsLoggedIn 
          userId={this.state.user.id} 
          getUserId={this.getUserId}
          userTopNine={this.state.userTopNine}
          username={this.state.user.username}
        />
        <Route path="/" render={() => 
          this.props.itemList.map((item, index) => <Item item={item} key={index} />)
        } />
      </div>
    )
  }
}

export default ItemBrowse;