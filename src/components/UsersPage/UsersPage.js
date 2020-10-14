import React, { Component } from 'react'
import Table from './Table'

export default class UsersPage extends Component {
    render() {
        return (      
          <div className="container-fluid">
            {/* Page Heading */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Usuarios</h1>
            </div>
            <Table/>
          </div>
        )
    }
}
