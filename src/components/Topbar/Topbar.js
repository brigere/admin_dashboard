import React, { Component } from 'react'

export default class Topbar extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* Sidebar Toggle (Topbar) */}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
              <i className="fa fa-bars" />
            </button>
            {/* Topbar Navbar */}
            <ul className="navbar-nav ml-auto">

              {/* Bell Item */}
              <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                  <i className="fas fa-bell fa-fw" />
                  {/* Counter - Alerts */}
                 <span className="badge badge-danger badge-counter">1+</span>
                </a>
               </li>

              {/* Messages Item*/}
              <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                  <i className="fas fa-envelope fa-fw" />
                  {/* Counter - Messages */}
                  <span className="badge badge-danger badge-counter">3</span>
                </a>
              </li>
              
              {/*  Vertical divider line */}
              <div className="topbar-divider d-none d-sm-block" />
              
              {/* Nav Item - User Information */}
              <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
                  <img className="img-profile rounded-circle" src="assets/images/dummy-avatar.jpg" width={60} alt="profile avatar" />
                </a>
              </li>
            </ul>
          </nav>
        )
    }
}
