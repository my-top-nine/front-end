import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './css/index.css';
import ItemBrowse from './components/ItemBrowse.js';

class App extends Component {

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>

          </nav>
        </header>
        <section className="User">

        </section>
        <section className="Item-browse">

        </section>

        <Route path="/" />
      </div>
    );
  }
}

export default App;
