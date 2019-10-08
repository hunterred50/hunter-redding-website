import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div className="nav">
                <img className="nav-item" src=""></img>
                <h1 className="nav-item">Home</h1>
                <h1 className="nav-item">About</h1>
                <h1 className="nav-item">Contact Me</h1>
            </div>
        )
    }
}
export default Navbar