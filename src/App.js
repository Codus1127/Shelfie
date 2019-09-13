import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header'
import Product from './components/Product/Product'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import axios from 'axios'

class App extends Component() {

  state = {
   products: []
  }

  componentDidMount(){
    axios.get("/api/products").then((products)=> {
      this.setState({products: products.data})
    })
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Product />
        <Dashboard />
        <Form />

      </div>
    )
  };
}

export default App;
