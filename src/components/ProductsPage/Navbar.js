import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light mb-2">
                <h1 className="h3 mb-0 text-gray-800">Productos</h1>

                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        )
    }
}
