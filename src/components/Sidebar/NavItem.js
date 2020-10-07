import React, { Component } from 'react'

export default class NavItem extends Component {
    render() {
        return (
            <li className="nav-item">
                <a className="nav-link collapsed" href="/">
                <i className="fas fa-fw fa-folder" />
                <span>Pages</span>
                </a>
            </li>
        )
    }
}
