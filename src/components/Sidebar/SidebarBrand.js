import React, { Component } from 'react'

export default class sidebarBrand extends Component {
    render() {
        return (
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div className="sidebar-brand-icon">
            <i className="fas fa-chart-line" />
            </div>
            <div className="sidebar-brand-text mx-3">Admin</div>
        </a>
        )
    }
}
