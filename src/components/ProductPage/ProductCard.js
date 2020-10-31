import React, { Component } from 'react'
import { Link, BrowserRouter as Router,Switch,Route, Redirect, useParams} from 'react-router-dom'
import EditProduct from '../EditProductPage/EditProduct'

export default class ProductCard extends Component {

    constructor(){
      super()
      this.state = {
        edit:false,
        delete:false,
        show:false
      }
      this.deleteProduct = this.deleteProduct.bind(this)
      this.edit = this.edit.bind(this)
      this.askDelete = this.askDelete.bind(this)
    }

    deleteProduct(e){
      e.preventDefault()
      this.setState({delete:false})
      let url = `http://localhost:5000/api/v1/products/${this.props.product.id}`
      fetch(url,{
        method:"DELETE"
      })
      .then(res=>res.json())
      .then(res => console.log(res))
      this.setState({deleted:true})
    }
    askDelete(e){
      e.preventDefault()
      this.setState({delete:true})
    }
    
    edit(e){
      e.preventDefault()
      this.setState({edit:true})
    }

    render() {
        return (
            <div>
              {this.state.delete?<div className="alert alert-danger text-center">
                ¿Desea Eliminar éste producto?   <button type="submit" onClick={this.deleteProduct} class="btn btn-light">Eliminar</button> <Link to="/products" style={{fontWeight:700}}> Cancelar</Link></div>
                :''}
              {this.state.deleted?<div className="alert alert-danger text-center">
                Producto Eliminado  | <Link to="/products" style={{fontWeight:700}}> Continuar</Link></div>
                :''}

              <div className="card mb-2 shadow" style={{maxWidth: '520px',margin:'auto'}}>
                <Link to={`/products/${this.props.product.id}`}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src={this.props.product.image} className="card-img" alt={this.props.product.name} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                          <h5 className="card-title">{this.props.product.name}</h5>
                          <p className="card-text">Product description</p>
                          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
                
              <div class="d-flex justify-content-center">
                    <button type="submit" onClick={this.edit} class="btn btn-outline-primary mr-1">Modificar</button>
                    <button onClick={this.askDelete} type="button" class="btn btn-outline-danger">Eliminar</button>
              </div>
              
              {this.state.edit? <EditProduct product={this.props.product} />:''}
              </div>

        )
    }
}

