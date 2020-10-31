import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NewProductPage extends Component {

    constructor(){
        super()
        this.state = {
            categories:[],
            variants:[],
            productName:'',
            productCategory:1,
            productVariant:'1 KG',
            productPrice:'',
            productDescription:'',
            productImage:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        fetch('http://localhost:5000/api/v1/products/categories')
        .then(res=>res.json())
        .then(categoryList => {
            this.setState({categories:categoryList.rows})
            // console.log(categoryList)
            // this.state.categories.map(cat=>console.log(cat))
        })
        .catch(e => console.log(e))

        fetch('http://localhost:5000/api/v1/products/variantTypes')
        .then(res=>res.json())
        .then(variantTypes=>{
            this.setState({variants:variantTypes})
        })
        .catch(e => console.log(e))
    }
    handleChange(e){
        let name = e.target.name
        this.setState({[name]:e.target.value})
    }
    handleSubmit(e){
        e.preventDefault()
        let data={
            name:this.state.productName,
            description:this.state.productDescription,
            category:this.state.productCategory,
            image:this.state.productImage,
            variant:this.state.productVariant,
            price:this.state.productPrice
        }
        fetch('http://localhost:5000/api/v1/products',{
            method:"POST",
            headers:{ 'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(response=>response.json())
        .then(newProduct=>console.log(newProduct))
        .catch(e=>console.log(e))

    }
    goBack(e){
        e.preventDefault()
        window.history.back()
    }
    
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-light bg-light mb-2 ">
                    <h1 className="h3 mb-0 text-gray-800">Crear Producto</h1>
                </nav>
                <div className="row">
                    <div className="col-6 m-auto">
                        <form onSubmit={this.handleSubmit}> 
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input name='productName' value={this.state.keyword} onChange={this.handleChange} className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                                </div>
                                <div className="form-group">
                                    <label>Categoría</label>
                                    <select className="form-control" name="productCategory" onChange={this.handleChange} value={this.state.productCategory}>
                                    {this.state.categories.map(category=>{
                                        return (<option value={category.id}>{category.name}</option>)
                                    })}
                                    </select>
                                </div>
                                
                                <div className="form-group">
                                    <label>Descripción</label>
                                    <textarea name="productDescription" onChange={this.handleChange} className="form-control" rows="3"></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Precio</label>
                                    <input onChange={this.handleChange} name="productPrice" type="number" className="form-control" min="1" placeholder="$"/>
                                </div>
                                <div className="form-group">
                                    <label>Variante</label>
                                    <select onChange={this.handleChange} name="productVariant" value={this.state.productVariant} className="form-control">
                                    {this.state.variants.map(variant=>{
                                        return <option value={variant}> {variant} </option>
                                        
                                    })}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Imagen</label>
                                    <input name='productImage' value={this.state.keyword} onChange={this.handleChange} className="form-control mr-sm-2" type="text" placeholder="URL" aria-label="Search" />
                                </div>

                                <div className="col-6 m-auto">
                                    <button className="btn btn-outline-success my-2 my-sm-0 mr-4 mb-2" type="submit">
                                        Crear                           
                                    </button>
                                    <button onClick={this.goBack} className="btn btn-outline-danger my-2 my-sm-0 mr-4" type="submit">
                                        Cancelar                           
                                    </button>
                                </div>
                            </form>
                    </div>

                </div>

            </div>
        )
    }
}
