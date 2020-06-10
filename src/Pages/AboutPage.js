import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

function AboutPage(){

    return(

        <Container className="mt-5" style={{position: "relative", fontFamily: "Muli"}}>
            <Jumbotron className="m-2 p-2 text-dark bg-transparent" style={{position: "absolute", top: "8px", left:"16px"}}>
                <h1 className="h3">About</h1>
                <p className="lead">I'm a full-stack software engineer,
                    about to start my 3rd year of Computer Science at Exeter University,
                    I love exploring and experimenting with new technology such as Machine Learning, Search Methods, Animations and Modern FrontEnd or BackEnd Frameworks and their associated libraries.</p>
                <p className="lead">
                    I have spent much of the last 2 years (when I started programming), teaching myself both FrontEnd and BackEnd development using Javascript, currently I am using the MongoDB, Express.js, React, Node.js (MERN) stack to develop web applications.
                    I also have experience in using RESTful routing in my node.js applications as well as a detailed understanding of Boostrap and CSS Flexbox as well as basic CSS and HTML.
                    I have worked with animations libraries such as p5.js to allow me to visualise certain projects, such as my A* Pathfinding algorithm and I am able to also code in Java and Python to a competent level.
                </p>
                <img src="https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif" alt="_"/>
            </Jumbotron>

        </Container>

    )
}

export default AboutPage