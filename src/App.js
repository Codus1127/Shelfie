import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }



  render() {

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/add' component={Form} />
          <Route path='/edit/:id' component={Form} />
        </Switch>


      </div>
    )
  };
}

export default withRouter (App);
