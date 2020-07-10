import React from "react";
import {Container, Jumbotron} from "react-bootstrap";


export default class Dashboard extends React.Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1 className="h1">
                        Welcome {this.props.username}
                    </h1>
                    <br/>
                    <h1 className="lead">
                        Dashboard coming soon
                    </h1>
                </Jumbotron>
            </Container>
        );
    }
}