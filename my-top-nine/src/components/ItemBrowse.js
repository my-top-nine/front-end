import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


import Item from './Item.js';

import { IsLoggedIn } from './IsLoggedIn';

class ItemBrowse extends Component {

  state = {
    userId: null
  }

  render() {
    return(
      <div>
        <IsLoggedIn userId={this.state.userId} />
        <Route path="/" render={() => 
          this.props.itemList.map(item => <Item item={item} />)
        } />
      </div>
    )
  }
}

export default ItemBrowse;