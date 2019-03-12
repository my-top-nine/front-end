import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


import Item from './Item.js';

import { IsLoggedIn } from './IsLoggedIn';

class ItemBrowse extends Component {

  state = {
    itemList: this.props.itemList,
    userId: null
  }

  render() {
    return(
      <div>
        <IsLoggedIn userId={this.state.userId} />
        <Item />
      </div>
    )
  }
}

export default ItemBrowse;