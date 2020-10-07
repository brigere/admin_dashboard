import React, { Component } from 'react'
import Cards from './Cards/Cards'
import InfoContainer from './InfoContainer/InfoContainer'

export default class MainContent extends Component {
    render() {
        return (
            
      <div className="container-fluid">
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>

      <Cards/>
      <InfoContainer/>

    </div>
        )
    }
}
