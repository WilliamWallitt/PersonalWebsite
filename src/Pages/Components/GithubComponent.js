import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skills from "../StatelessComponents/Skills";

export default class GithubComponent extends React.Component {


    constructor() {
        super();
        this.state = {
            data: null
        }
    }

    async componentDidMount() {

        if (this.state.data !== null) {

        }

        if (this.state.data === null) {


            try {

                const response = await fetch(this.props.req)
                const json = await response.json()

                // lets sort by id
                json.sort(function(a, b){
                    return b.id - a.id;
                });

                this.setState({
                    data: json
                })

            } catch (e) {
                console.log(e)
            }

        }


    }

    render() {

        if (this.state.data === null) {
            return (
                <Container className="mt-5 text-center">
                    <img src="https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif" alt="gif" style={{width: "80vw"}}/>
                </Container>
                )
        } else {
            return(

                <Container className="mt-5" style={{fontFamily: "Muli"}}>
                    <h1 className="lead">My Github Projects</h1>

                    <Row>
                        <Col className="mb-5">
                            <Skills className="shadow-lg"/>
                        </Col>
                    </Row>

                    <ListGroup variant="flush">
                        {this.state.data.map((value, index) => (
                            <ListGroup.Item key={index}>
                                <p className="h3">{value.name}</p>
                                <p><code>[Created at] </code>{value.created_at.slice(0, 10)} </p>
                                <p><code>[Description] </code>{value.description}</p>
                                <p><code>[Language] </code>{value.language}</p>
                            </ListGroup.Item>))}
                    </ListGroup>

                    <Container className="p-5 m-5 mx-auto">
                        <Card className="text-center mx-auto rounded-lg shadow-lg" style={{ width: '18rem'}}>
                            <Card.Img variant="top" style={{height: "20vh", objectFit: "cover"}} src={this.state.data[0].owner.avatar_url}/>
                            <Card.Body>
                                <Card.Title>{this.state.data[0].owner.login}</Card.Title>
                                <Button variant="outline-dark" href={this.state.data[0].owner.html_url}>Github</Button>
                            </Card.Body>
                        </Card>
                    </Container>
                </Container>
            )
        }

    }

}
