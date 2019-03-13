import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './css/index.css';
import Navigation from './components/Nav.js';
import ItemBrowse from './components/ItemBrowse';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      itemList: [],
      error: '',
    };
  }

  componentDidMount() {
    axios
    .get('https://my-top-nine.herokuapp.com/api/categories')
    .then(res => {
      this.setState({ itemList: res.data });
    })
    .catch(err => {
      this.setState({ error: err })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <Route path="/" component={Navigation} />
          </nav>
        </header>
        <section className="Item-browse">
          <Route path="/" render={() => {
            return(
              <ItemBrowse 
                itemList={this.state.itemList}
              />)
          }} />
        </section>
      </div>
    );
  }
}

export default App;
