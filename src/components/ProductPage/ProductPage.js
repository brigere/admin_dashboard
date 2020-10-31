import React, { Component } from 'react'
import ProductCard from './ProductCard'

export default class ProductPage extends Component {
    constructor(){
        super()
        this.state={
            product:{}
        }
    }
    componentDidMount(){
        let id = window.location.pathname.slice(10,window.location.pathname.length)
        fetch(`http://localhost:5000/api/v1/products/${id}`)
        .then(response => response.json())
        .then(data=>{this.setState({ product:data })})
        .catch(e=>console.log(e))
        console.log(this.state.product)
    }
    if
    render() {
        if(this.state.product){
            return (
                <ProductCard product={this.state.product}/>
            )
        }else{return <h3>No existe el producto</h3>}
        
    }
}
