import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class InfoContainer extends Component {

    constructor(){
      super()
      this.state = {
        lastProducts:[],
        lastUsers:[]
      }
    }

    componentDidMount(){
      let host = 'localhost:5000'
      //traer ultimos productos creados
      fetch(`http://${host}/api/v1/products?order=1&limit=5`)
      .then(res=>res.json())
      .then(data=>{
        this.setState({lastProducts:data})
      })
      .catch(e=>console.log(e))
      //traer ultimos usuarios registrados
      fetch(`http://${host}/api/v1/users?last=1`)
      .then(res=>res.json())
      .then(data=>{
        this.setState({lastUsers:data})
      })
      .catch(e =>console.log(e))

    }

    render() {
        return (
          <div className="row">

          {/* Last Product in DB */}
            <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Últimos productos agregados</h6>
              </div>
            {this.state.lastProducts.map((p,i)=>{
              return (
                <Link to={`/products/${p.id}`}>
                  <div class="card">
                    <div class="card-body">
                    <img className="card-image-right mr-2" src={p.image} style={{maxWidth:'50px'}}/>
                      <div style={{overflow:'hidden'}}>{p.name}</div>
                    </div>
                    
                  </div>
                </Link>
              )
            })}

            </div>
          </div>

          {/* last users in DB */}
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Últimos usuarios registrados</h6>
              </div>
            {this.state.lastUsers.map((u,i)=>{
              return (
                <Link to={`/users/${u.id}`}>  
                  <div class="card">
                    <div class="card-body">
                    <img className="card-img rounded-circle  mr-2" src={`/assets/tmp/myUploads/defaultAvatar.jpg`} style={{maxWidth:'50px'}}/>
                      <div style={{overflow:'hidden'}}>{`${u.first_name} ${u.last_name} | ${u.email}`}</div>
                    </div>
                  </div>
                </Link>
              )
            })}

            </div>
          </div>
              
          </div>
        )
    }
}
