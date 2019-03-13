import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


import Item from './Item.js';

import { IsLoggedIn } from './IsLoggedIn';

class ItemBrowse extends Component {
  constructor() {
    super();
    this.state = {
      userId: null
    }
  }

  getUserId = newId => {
    this.setState({ userId: newId })
    console.log(this.state);
  }

  render() {
    return(
      <div>
        <IsLoggedIn 
          userId={this.state.userId} 
          getUserId={this.getUserId} 
        />
        <Route path="/" render={() => 
          this.props.itemList.map((item, index) => <Item item={item} key={index} />)
        } />
      </div>
    )
  }
}

export default ItemBrowse;