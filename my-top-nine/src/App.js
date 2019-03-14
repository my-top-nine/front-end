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

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState);
  //   if(prevState.itemList.id !== this.state.itemList.id) {
  //     // have to sort items into each category since you can only get them separately
  //     // from the server for some reason
  //     let tempItemList = [];
  //     this.state.itemList.map(category => {
  //       return(axios
  //         .get(`https://my-top-nine.herokuapp.com/api/categories/${category.id}/items`)
  //         .then(res => {
  //           tempItemList[category.name] = res.data;
  //         })
  //         .catch(err => console.log(err))
  //       );       
  //     });
  //     console.log(tempItemList);
  //     this.setState({ itemList: tempItemList });
  //   }
  // }

  // getItemList = () => {
  //   const tempCat = [];
  //   axios
  //   .get('https://my-top-nine.herokuapp.com/api/categories')
  //   .then(res => {
  //     tempCat.categories = res.data;
  //   })
  //   .catch(err => {
  //     this.setState({ error: err })
  //   })

  //   let tempItemList = [];
  //   tempCat.categories.map(category => (
  //     axios
  //     .get(`http://my-top-nine.herokuapp.com/api/categories/${category.id}/items`)
  //     .then(res => {
  //       tempItemList.push(res.data);
  //     })
  //     .catch(err => console.log(err))
  //   ));
  //   this.setState({ itemList: tempItemList })
  // }

  componentDidMount() {
    axios
    .get('https://top9backend.herokuapp.com/api/guest')
    .then(res => {
      this.setState({ itemList: res.data });
    })
    .catch(err => {
      this.setState({ error: err })
    })
    // this.getItemList();
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
