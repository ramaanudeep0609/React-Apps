import React, { Component } from 'react'
import './App.css'
import data from './data';
import Products from './Products';

class App extends Component {
  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Welcome</h2>
      </div>
      <p className="App-intro">
        Browse thorough the SQL products available.
      </p>
      <div className='products'>
        <Products productList={data.products}/>
      </div>
    </div>
  }
}

export default App;
