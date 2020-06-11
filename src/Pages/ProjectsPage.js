import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import AStar from "../Assets/Images/A*Project.png"
import TicTacToe from "../Assets/Images/TicTac.png"
import StCezaire from "../Assets/Images/StCez.png"
import YelpCamp from "../Assets/Images/YelpCamp.png"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import '../Assets/Stylesheets/Projects.css';


import {
    Link
} from "react-router-dom";
import Skills from "./StatelessComponents/Skills";

function ProjectsPage(){

    const carosel_styling = {
        width: "100%",
        height: "60vh"
    }

    return (

        <Container className="d-flex justify-content-center mt-3" style={{fontFamily: "Muli"}}>
            <Col>
                <Row className="text-dark align-items-center">
                    <Container className="text-center m-3">
                        <h1 className="h3">Projects</h1>
                    </Container>
                </Row>

                <Row>

                    <Carousel className="shadow-lg">
                        <Carousel.Item style={carosel_styling}>
                            <Link to="projects/astar">
                                <img
                                    className="d-block w-100 h-80"
                                    src={AStar}
                                    alt="First slide"
                                />
                            </Link>

                            <Carousel.Caption className="text-dark p-1">
                                <h3>A* Path Finding Visualiser</h3>
                                <p>An interactive visualiser for a grid search using the A* algorithm</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item style={carosel_styling}>
                            <Link to="/projects/yelpcamp">
                                <img
                                    className="d-block w-100 h-80"
                                    src={YelpCamp}
                                    alt="Second slide"
                                />
                            </Link>

                            <Carousel.Caption className="text-light bg-dark">
                                <h3>Campgrounds Website</h3>
                                <p>A website where users login and leave reviews of certain campgrounds they visited</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item style={carosel_styling}>
                            <Link to="/projects/tictactoe">
                                <img
                                    className="d-block w-100 h-80"
                                    src={TicTacToe}
                                    alt="Third slide"
                                />
                            </Link>

                            <Carousel.Caption className="text-dark">
                                <h3>Tic Tac Toe Game</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item style={carosel_styling}>
                            <Link to="/projects/stcezair">
                                <img
                                    className="d-block w-100 h-80"
                                    src={StCezaire}
                                    alt="Forth slide"
                                />
                            </Link>

                            <Carousel.Caption className="text-light bg-dark">
                                <h3>Website for Client - House to Rent</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </Row>

                <Skills/>

            </Col>

        </Container>

        )

}


export default ProjectsPage