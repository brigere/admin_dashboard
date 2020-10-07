import React, { Component } from 'react';

import SidebarBrand from './SidebarBrand'
import NavItem from './NavItem'

export default class Sidebar extends Component{
    render(){
        return(
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <SidebarBrand/>

            {/* Divider */}
            <hr className="sidebar-divider my-0" />

            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
                <a className="nav-link" href="/">
                <i className="fas fa-fw fa-tachometer-alt" />
                <span>Dashboard</span></a>
            </li>
            
            {/* Divider */}
            <hr className="sidebar-divider" />

            {/* Heading */}
            <div className="sidebar-heading">Actions</div>
            <NavItem/>
            <NavItem/>
            <NavItem/>

            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            </ul>   
        )
    }
}