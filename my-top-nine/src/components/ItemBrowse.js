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
      userTopNine: {}
    }
  }

  getUserId = (username) => {
    const token = localStorage.getItem('userToken');
    const tokenInfo = decode(token);
    console.log(tokenInfo);
    this.setState({ user: {
      ...this.state,
      username: username,
      id: tokenInfo.id
    }});
  }

  getUserTopNine = () => {
    axios
    .get(`http://my-top-nine.herokuapp.com/api/${this.state.user.id}/favorites`)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <IsLoggedIn 
          userId={this.state.user.id} 
          getUserId={this.getUserId} 
          getUserTopNine={this.getUserTopNine}
        />
        <Route path="/" render={() => 
          this.props.itemList.map((item, index) => <Item item={item} key={index} />)
        } />
      </div>
    )
  }
}

export default ItemBrowse;