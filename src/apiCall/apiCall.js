module.exports = {
    apiCall:(url='http://localhost:5000/api/v1/products')=>{
        let results
        fetch(url)
        .then(response=>response.json())
        .then(productsDb=>{
            results = productsDb
            // this.setState({products:productsDb.rows})
            // console.log(this.state.products)
        })
        .catch(e=>results=e)

        return(results)
    }
}
