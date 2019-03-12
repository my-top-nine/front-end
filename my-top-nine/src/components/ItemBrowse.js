import React, { Component } from 'react';
import User from './User.js';
import Item from './Item.js';

class ItemBrowse extends Component {
  render() {
    return(
      <div>
        <User />
        <Item />
      </div>
    )
  }
}

export default ItemBrowse;