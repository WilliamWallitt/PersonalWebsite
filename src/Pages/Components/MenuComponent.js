import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import React from "react";
import { connect } from 'react-redux'

class MenuComponent extends React.Component {

    render() {

        return (
            <Navbar className="sticky-top" bg="light" expand="sm">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link text-dark">Home</Link>
                        <Link to="/about" className="nav-link text-dark">About</Link>
                        <Link to="/projects" className="nav-link text-dark">Projects</Link>
                        <Link to="/github" className="nav-link text-dark">GitHub</Link>
                        <Link to="/spotify" className="nav-link text-dark">Spotify</Link>

                    </Nav>
                    <Nav className="ml-auto">
                        <Link to={this.props.isAuthenticated ? "/logout" : "/login"} className="nav-link text-dark">{this.props.isAuthenticated ? "Logout" : "Login"}</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )

    }

}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null
    }
}

export default connect(mapStateToProps)(MenuComponent)


