import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import AStar from "../assets/Images/A*Project.png"
import TicTacToe from "../assets/Images/TicTac.png"
import StCezaire from "../assets/Images/StCez.png"
import YelpCamp from "../assets/Images/YelpCamp.png"
import PatapapClone from "../assets/Images/patapapclone.png"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../assets/Stylesheets/Projects.css';
import Project from "./Project"

import Skills from "./StatelessComponents/Skills";

function ProjectsPage(){


    return (

        <Container className="d-flex justify-content-center mt-3" style={{fontFamily: "Muli"}}>
            <Col className="mt-5">

                <Row>

                    <div className="intro-wrapper">
                        <div className="nav-wrapper">
                            <a href="/">
                                <div className="dots-wrapper">
                                    <div id="dot-1" className="browser-dot"/>
                                    <div id="dot-2" className="browser-dot"/>
                                    <div id="dot-3" className="browser-dot"/>
                                </div>
                            </a>

                            <ul id="navigation">
                                <li><a>Projects</a></li>
                            </ul>

                        </div>
                    </div>
                </Row>

                <Row>
                    <Carousel className="shadow-lg">
                        <Carousel.Item>
                            <Project name="A* Path Finding Visualiser" description="An interactive visualiser for a grid search using the A* algorithm" linkTo="projects/astar" image={AStar}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Project name="Campgrounds Website" description="A website where users can login and leave reviews of certain campgrounds they visited" linkTo="projects/yelpcamp" image={YelpCamp}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Project name="TicTacToe Game" description="An interactive TicTacToe game people can play on all devices" linkTo="projects/tictactoe" image={TicTacToe}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Project name="Music Visualiser" description="A website that you can make simple beats using your keyboard and it comes with a visualiser for each sound" linkTo="/projects/clone" image={PatapapClone}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Project name="Website for a French villa to let during the summer" linkTo="/projects/stcezair" image={StCezaire}/>
                        </Carousel.Item>
                    </Carousel>

                </Row>

                <Skills/>

            </Col>

        </Container>

        )

}


export default ProjectsPage
