import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function Skills() {
    return (
        <Row>
            <Container className="mt-5 p-3 text-white text-center rounded-lg shadow-lg" style={{backgroundColor:"rgb(50, 50, 75)"}}>
                <ul style={{listStyle: "none"}}>
                    <li><h4>Tech</h4>
                        <p>React, Redux, Javascript, Node.js, Passport.js, Python, HTML5, CSS3, MySQL, Heroku, Boostrap, Git &amp; Github</p></li>
                    <li><h4>Data</h4>
                        <p>Numpy, Matlab, SciKit Learn, Pandas, Matplotlib, Numerical Analysis</p></li>
                    <li><h4>Creative</h4>
                        <p>P5.js</p></li>
                </ul>
            </Container>
        </Row>
    )
}