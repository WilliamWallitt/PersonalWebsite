import React from 'react'
import Board from "./Board";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Game extends React.Component {

    render() {

        const generate_coords = (array, rows, cols) => {
            for (let i = 0; i < rows ; i++) {
                array.push([0])
                for (let j = 0; j < cols; j++) {
                    array[i][j] = [i, j]
                }
            }
            return array
        }

        const rows = 3
        const colums = 3
        const coords = generate_coords([], rows, colums)


        return (

            <Container className="mt-1 p-0 w-100 h-100">

                <Col>
                    <Row style={{backgroundColor: "white", marginTop: "17vh"}}>
                        <Board grid_size={coords} rows={rows}/>
                    </Row>
                </Col>

            </Container>


        );
    }
}