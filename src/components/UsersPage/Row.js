import React, { Component } from 'react'

export default class Row extends Component {
    
    constructor(){
        super();
        this.message = this.message.bind(this)
    }

    message(){}
    
    render() {
        return (
            <tr onClick={this.message}>
                <th scope="row">{this.props.user.id}</th>
                <td>{this.props.user.first_name}</td>
                <td>{this.props.user.last_name}</td>
                <td>{this.props.user.email}</td> 
            </tr>
        )
    }
}
