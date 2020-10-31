import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

/*--- Components ---*/
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Topbar from './components/Topbar/Topbar'
import Footer from './components/Footer/Footer'
import DashboardPage from './components/DashboardPage/DashboardPage'
import UsersPage from './components/UsersPage/UsersPage'
import ProductsPage from './components/ProductsPage/ProductsPage'
import NewProductPage from './components/NewProductPage/NewProductPage'
import ProductPage from './components/ProductPage/ProductPage'
import EditProduct from './components/EditProductPage/EditProduct'

export default class App extends Component {
  render() {
    return (
      <Router>
      <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar/>

            <Switch>
            <Route exact path='/products/new' component={NewProductPage}/>
            <Route exact path='/products' component={ProductsPage} />
            <Route exact path='/users' component={UsersPage} />
            <Route exact path='/' component={DashboardPage} />
            <Route exact path='/products/:id' component={ProductPage}/>
            </Switch>
            
          </div>
          <Footer/>
        </div>
      </div>  
      </Router>
    )
  }
}
