import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';

/*--- Components ---*/
import Sidebar from './components/Sidebar/Sidebar'
import Topbar from './components/Topbar/Topbar'
import Footer from './components/Footer/Footer'
import DashboardPage from './components/DashboardPage/DashboardPage'
import UsersPage from './components/UsersPage/UsersPage'
import ProductsPage from './components/ProductsPage/ProductsPage'

export default class App extends Component {
  render() {
    return (
      <Router>
      <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar/>

            <Route path='/products' component={ProductsPage} />
            <Route path='/users' component={UsersPage} />
            <Route exact path='/' component={DashboardPage} />
            
          </div>
          <Footer/>
        </div>
      </div>  
      </Router>
    )
  }
}
