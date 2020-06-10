import React from "react";
import Container from "react-bootstrap/Container";
require("./Footer.css")


export default function Footer() {

    return (
        <Container className="d-flex justify-content-center text-center">
            <div className="footer-social-icons">
                <ul className="social-icons">
                    <li><a href="/" className="social-icon"><i className="fa fa-facebook"/></a></li>
                    <li><a href="/" className="social-icon"><i className="fa fa-twitter"/></a></li>
                    <li><a href="/" className="social-icon"><i className="fa fa-rss"/></a></li>
                    <li><a href="/" className="social-icon"><i className="fa fa-youtube"/></a></li>
                    <li><a href="/" className="social-icon"><i className="fa fa-linkedin"/></a></li>
                    <li><a href="/" className="social-icon"><i className="fa fa-github"/></a></li>
                </ul>
            </div>
        </Container>
    )

}