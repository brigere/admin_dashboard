import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class ProductCard extends Component {
    render() {
        return (
            <div className="card mb-2 shadow" style={{maxWidth: '480px',margin:'auto'}}>
              <Link to={`/products/${this.props.product.id}`}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={this.props.product.image} className="card-img" alt={this.props.product.name} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.product.name}</h5>
                        <p className="card-text">Descripción del producto</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </Link>
          </div>
        )
    }
}
