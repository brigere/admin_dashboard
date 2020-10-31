import React, { Component } from 'react'
export default class Cards extends Component {

    constructor(){
      super();
      this.state={
        totalProducts: null,
        totalUsers: null,
        totalCategories:null
      }
    }

    componentDidMount() {
      let hostname = 'localhost:5000' 
      //traer cantidad de productos en la base de datos
      fetch(`http://${hostname}/api/v1/products`)
      .then(response=>response.json())
      .then((products)=>{
        console.log('Products: '+products)
        this.setState({ totalProducts: products.total })
      })
      .catch(e => console.log(e))

      //traer usuarios
      fetch(`http://${hostname}/api/v1/users`)
     .then(response=>response.json())
      .then((users)=>{
        this.setState({ totalUsers:users.count})
      })
      .catch(e => console.log(e))
      
      //traer usuarios
      fetch(`http://${hostname}/api/v1/products/categories`)
      .then(response=>response.json())
      .then((cat)=>{
        this.setState({ totalCategories:cat.count})
      })
      .catch(e => console.log(e))

    }

    render() {
        return (
          <div className="row">

            {/* Amount of Products in DB */}
            <div className="col-md-4 mb-4">
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold 
                        text-primary text-uppercase mb-1"> Productos</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.totalProducts}</div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* $$$ of all products in DB */}
            <div className="col-md-4 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-success 
                        text-uppercase mb-1"> Categorías</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.totalCategories}</div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-shopping-bag fa-2x text-gray-300"></i>
                      {/* <i className="fas fa-dollar-sign " /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Amount of users in DB */}
            <div className="col-md-4 mb-4">
              <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold 
                        text-warning text-uppercase mb-1">Usuarios
                      </div>
        <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.totalUsers}</div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-user-check fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
