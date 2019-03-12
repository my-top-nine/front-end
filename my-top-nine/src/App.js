import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './css/index.css';
import Navigation from './components/Nav.js';
import ItemBrowse from './components/ItemBrowse.js';
import Login from './components/Login.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      itemList: [],
      error: '',
      activeItem: null
    };
  }

  componentDidMount() {
    axios
    .get('https://my-top-nine.herokuapp.com/api/categories')
    .then(res => {
      this.setState({ itemList: res.data });
    }, () => console.log(this.state))
    .catch(err => {
      this.setState({ error: err })
    })
  }

  getItems() {
    this.state.itemList.map(id => {
      return(
      axios
      .get(`https://my-top/nine.herokuapp.com/api/categories/${id}/items`)
      .then(res => {console.log(res)})
      .catch(err => console.log(err))
      );
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <Navigation />
          </nav>
        </header>
        <section className="Item-browse">
          <Login />
          <ItemBrowse />
        </section>

        <Route path="/" />
      </div>
    );
  }
}

export default App;
