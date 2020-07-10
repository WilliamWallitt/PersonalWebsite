import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Link} from "react-router-dom";

function AboutPage(){

    return(

        <Container className="mt-5 p-5 shadow-lg" style={{fontFamily: "Muli", alignItems: "center"}}>
            <h1 className="h3">About</h1>
            <hr/>
            <Row>
                <p className="lead">
                    I'm a full-stack software engineer, about to start my 3rd year of Computer Science at Exeter University.
                </p>
                <p className="lead">
                    I love exploring and experimenting with new technology such as Machine Learning, Informed and Uniformed Search Methods, Animations and Modern FrontEnd or BackEnd Frameworks and their associated libraries
                </p>
                <p className="lead">
                    I have spent much of the last 2 years (when I started programming) teaching myself both FrontEnd and BackEnd development using Javascript.
                </p>
                <p className="lead">
                    Currently I am using the <code>MongoDB, Express.js, React <img src="https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif" alt="_" style={{width: "25px", height: "25px"}}/>
                    , Node.js </code>(MERN) stack to develop web applications.
                    I also have experience in using <code>RESTful routing</code> in my node.js applications as well as a detailed understanding of <code>Boostrap</code> and <code>CSS Flexbox</code> as well as basic CSS and HTML.
                    I have worked with animations libraries such as <code>p5.js</code> to allow me to visualise certain projects, such as my A* Pathfinding algorithm and I am able to also code in <code>Java</code> and <code>Python</code> to a competent level.
                </p>

                <p className="lead">
                    During University I have among other things also developed an android app, using android studio which is in Java. An interactive treasure trail web app that helps 1st year students find their way around campus, as well creating my own K-Means-Clustering algorithm for classifying hand written digits in python.
                </p>

            </Row>

            <Row className="text-center mt-5" style={{justifyContent: "center"}}>
                <Link to="/projects"><div className="btn btn-outline-dark">
                     View My Projects
                </div></Link>

            </Row>

        </Container>

    )
}

export default AboutPage