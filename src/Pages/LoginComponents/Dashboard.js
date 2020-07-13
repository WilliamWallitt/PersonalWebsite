import React from "react";
import {Button, Container, Form, Jumbotron, ListGroup, ListGroupItem} from "react-bootstrap";
import firebase from 'firebase'
import axios from 'axios'
import Row from "react-bootstrap/Row";


let database;

// Initialize Firebase
export default class Dashboard extends React.Component {

    state = {
        current_users: null,
        orders: null,
        ingredient: ""
    }

    axios_request = (url, token) => {
        return axios.get(url+token)
    }

    firebase_request = url => {
        return database.ref(url).once('value')
    }


    async componentDidMount() {

        const firebaseConfig = {
            apiKey: "AIzaSyA3AMWMqs8xAse1HaIJbGZAxkhbZbOaWVg",
            authDomain: "react-my-burger-d545f.firebaseapp.com",
            databaseURL: "https://react-my-burger-d545f.firebaseio.com",
            projectId: "react-my-burger-d545f",
            storageBucket: "react-my-burger-d545f.appspot.com",
            messagingSenderId: "689677491143",
            appId: "1:689677491143:web:af60238bb706447c08d7e2"
        };

        let app = await firebase.initializeApp(firebaseConfig);
        database = await app.database()

        let data = await this.firebase_request('/ingredients')
        data = Object.keys(data.val())

        let orders = await this.axios_request('https://react-my-burger-d545f.firebaseio.com/orders.json?auth=', this.props.token)
        orders = Object.values(orders.data).map(value => {
            return value
        })

        this.setState({
            current_users: data,
            orders: orders
        })


    }


    delete_ingredient_handler = async (name) => {
        database.ref('/ingredients/' + name).remove(error => {
            console.log(error)
        })

        let data_set = await this.firebase_request('/ingredients')
        data_set = Object.keys(data_set.val())

        this.setState({
            current_users: data_set
        })

    }

    add_ingredient_handler = async (name) => {
        database.ref('/ingredients/'+ name).set({
            ingredient: name
        }, error => {
            if (error) {
                console.log("error")
            } else {
                console.log("saved")
            }
        })

        let data_set = await this.firebase_request('/ingredients')
        data_set = Object.keys(data_set.val())

        this.setState({
            current_users: data_set
        })

    }

    edit_ingredient_handler = async (name, value) => {
        database.ref('/ingredients/' + name).update({
            ingredient: value
        }, error => {
            if (error) {
                console.log("error")
            } else {
                console.log("saved")
            }
        })

        let data_set = await this.firebase_request('/ingredients')

        data_set = Object.keys(data_set.val())

        this.setState({
            current_users: data_set
        })
    }

    on_change_handler = (event) => {
        this.setState({
            ingredient: event.target.value
        })
    }




    render() {

        return (
            <Container>
                <Row>

                    <Jumbotron className="m-5">
                        <h1 className="h1">
                            Welcome {this.props.username}
                        </h1>
                        <br/>
                        <h1 className="lead">
                            Testing CURD methods on firebase
                        </h1>
                    </Jumbotron>

                </Row>

                <h1 className="h2 text-center">Add Ingredient Here</h1>

                <Row className="d-flex justify-content-center text-center">

                    <Form className="mb-5 mt-5">
                        <Form.Control size="sm" type="text" placeholder="Enter Ingredient" value={this.state.ingredient} onChange={this.on_change_handler}/>
                        <Button variant="outline-success" onClick={() => this.add_ingredient_handler(this.state.ingredient)}>Add</Button>
                    </Form>
                </Row>
                <Row className="d-flex justify-content-center mb-5">
                    <ListGroup style={{width: "50vw"}}>
                        {this.state.current_users !== null && this.state.current_users.map((value, index) => {
                            return (
                                <ListGroupItem key={index}>
                                    {value}
                                    <Button onClick={() => this.delete_ingredient_handler(value)} variant="outline-danger" className="float-right">Remove</Button>
                                </ListGroupItem>
                            )
                        })}
                    </ListGroup>
                </Row>
                <h1 className="h2 text-center">List of orders</h1>
                <Row>
                    <ListGroup style={{width: "100vw"}}>
                        {this.state.orders !== null && this.state.orders.map((value, index) => {
                            return (<ListGroupItem key={index}>
                                <code>Email </code>{value.customer.email }
                                <br/>
                                <code>Address </code> {value.customer.address.countrt + " : " + value.customer.address.street}
                                <br/>
                                <code>Delivery Method </code>{value.deliveryMethod}
                                <br/>
                                <code>Price </code>{value.price}
                                <br/>
                            </ListGroupItem>)
                        })}
                    </ListGroup>
                </Row>

            </Container>
        );
    }
}