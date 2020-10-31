import React, { Component } from 'react'
import Table from './Table'

export default class UsersPage extends Component {

    constructor(){
      super();
        this.state = {
            userList:[],
            keyword:''
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }
      componentDidMount() {
        fetch('http://localhost:5000/api/v1/users')
        .then(response=>response.json())
        .then(usersDb=>{
          this.setState({userList:usersDb.rows})
          console.log(`user list: ${this.state.userList}`)
        })
        .catch(e=>console.log(e))
      }
      handleChange(e){
        this.setState({keyword:e.target.value})
      }
      handleSubmit(e){
        e.preventDefault()
        console.log('state.keyword: '+ this.state.keyword)
        if(this.state.keyword.length>0){
            fetch(`http://localhost:5000/api/v1/users?keyword=${this.state.keyword}`)
            .then(response=>response.json())
            .then(usersDb=>{
              this.setState({userList:usersDb}) 
            })
            .catch(e => console.log(e))
        }
      }

    render() {
      return (      
          <div className="container-fluid">
            
            {/* Navbar */}
              <nav className="navbar navbar-light bg-light mb-2">
                <h1 className="h3 mb-0 text-gray-800">Usuarios</h1>

                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <input value={this.state.keyword} onChange={this.handleChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
              </nav>
            {/* ------ */}

            <Table users={this.state.userList}/>

          </div>
        )
    }
}
