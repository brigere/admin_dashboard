import React, { Component } from 'react';
import {Link} from 'react-router-dom'

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
                    <Link to='/' className='nav-link'>
                    {/* <a className="nav-link" href="/"> */}
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span>
                    {/* </a> */}
                    </Link>
                </li>
            
                {/* Divider */}
                <hr className="sidebar-divider" />

                {/* Heading */}
                <div className="sidebar-heading">Menu</div>
                    <NavItem title="Productos" link='products'/>
                    <NavItem title="Usuarios" link='users'/>    

                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>   
        )
    }
}