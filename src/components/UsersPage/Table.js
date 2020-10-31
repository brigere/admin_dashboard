import React, { Component } from 'react'
import Row from './Row';
import './Table.css'

export default class Table extends Component {
    
        constructor(props){
          super(props);
          this.state={
            users:this.props.users
          }
        }
        

      render() {    
        return (
            <table className="table table-hover shadow">
            <thead className="thesd-dark">
              <tr>
                <th scope="col">id</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {this.props.users.map(user=>{
                return(
                    <Row user={user} key={user.id}/>
                )
              })}
            </tbody>
          </table>
            )
    }
}
