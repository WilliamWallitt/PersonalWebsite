import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function Skills() {
    return (
        <Row style={{width: "80vw"}}>
            <Container className="mt-5 p-3 text-center rounded-lg shadow-lg" style={{backgroundColor:"rgb(50, 50, 75)"}}>
                <ul style={{listStyle: "none"}}>
                    <li><h4 className="m-3"><code>Tech</code></h4>
                        <p className="text-white lead">React, Redux, Javascript, Node.js, Passport.js, Python, HTML5, CSS3, MySQL, Heroku, Boostrap, Git &amp; Github</p></li>
                    <li><h4 className="m-3"><code>Data</code></h4>
                        <p className="text-white lead">Numpy, Matlab, SciKit Learn, Pandas, Matplotlib, Numerical Analysis</p></li>
                    <li><h4 className="m-3"><code>Creative</code></h4>
                        <p className="text-white lead">P5.js</p></li>
                </ul>
            </Container>
        </Row>
    )
}
