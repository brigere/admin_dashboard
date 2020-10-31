import React, { Component } from 'react'
import Pagination from './Pagination'
import ProductCard from './ProductCard'
import {Link} from 'react-router-dom'

export default class ProductsPage extends Component {

    constructor(){
        super();
        this.state = {
            products:[],
            keyword:'',
            pagination:true,
            page:1
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        //cargar productos
        fetch('http://localhost:5000/api/v1/products')
        .then(response=>response.json())
        .then(productsDb=>{
            this.setState({products:productsDb.rows})
            // console.log(this.state.products)
        })
    }
    handleSubmit(e){
        e.preventDefault()
        console.log('state.keyword: '+ this.state.keyword)
        if(this.state.keyword.length>0){
            fetch(`http://localhost:5000/api/v1/products?keyword=${this.state.keyword}`)
            .then(response=>response.json())
            .then(productsDb=>{
                this.setState({products:productsDb,pagination:false})
                console.log('state: '+ this.state.products) 
            })
            .catch(e => console.log(e))
        }
    }
    handleChange(e){
        this.setState({keyword:e.target.value})
    }

    render() {
        return (
            <div className="container-fluid">
                
                {/* Navbar */}
                <nav className="navbar navbar-light bg-light mb-2 ">
                    <h1 className="h3 mb-0 text-gray-800">Productos</h1>
                    <div className='row'>
                    <Link to='/products/new'>
                        <button className="btn btn-outline-success my-2 my-sm-0 mr-4" type="submit">
                            Crear                            
                        </button>
                    </Link>
                        <form className="form-inline mr-0" onSubmit={this.handleSubmit}>
                            <input value={this.state.keyword} onChange={this.handleChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                {/* ------ */}

                <div className="row">
                    {this.state.products.map(product=>{
                        return (
                            <ProductCard product={product} key={product.id}/>
                        )
                        
                    })}
                </div>

                {/* Pagination  */}
                {this.state.pagination?<Pagination/>:''}

            </div>
        )
    }
}
