import React from 'react'
import Square from "./Square";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default class Board extends React.Component{

    // what we initialise when we create our Board

    constructor(props) {
        super(props);
        // boxes -> keep track of which square is an "X" or "O"
        // x_is_next -> who's turn is it?
        // history -> history of player moves
        this.state = {
            boxes: Array(9).fill(null),
            x_is_next: true,
            history: []
        }
    }

    boxcoordinate = index => {
        let row = index % 3
        let col = index - row * 3
        return "[" + row + "," + col + "]"
    }

    handleBoxClick(index) {
        const boxes = this.state.boxes.slice()
        let history = this.state.history
        let x_is_next = this.state.x_is_next

        if (boxes[index] === null && !this.boxesClicked(boxes) && !this.winningCombinations(boxes)){
            boxes[index] = x_is_next ? "X" : "O"
            history = history.concat(boxes[index] + " at " + this.boxcoordinate(index) + " ")
            x_is_next = !x_is_next
        }

        this.setState({
            boxes: boxes,
            x_is_next: x_is_next,
            history: history
        })
    }

    handleBoardRestart = () => {
        this.setState({
            boxes: Array(9).fill(null),
            x_is_next: true,
            history: []
        })
    }

    winningCombinations = (boxes) => {
        const rows = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < rows.length; i++) {

            const [a, b, c] = rows[i]

            if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]){
                return ((boxes[a] === "X" ? "1" : "2"))
            }
        }
        return null

    }

    boxesClicked = (boxes) => {
        let clicked = 0
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i] !== null){
                clicked += 1
            }
        }
        return clicked >= boxes.length;
    }

    render() {

        const values = this.props.grid_size
        const boxes = this.state.boxes
        const winner = this.winningCombinations(boxes)
        const turn = this.state.x_is_next
        const all_clicked = this.boxesClicked(boxes)
        let status = ""

        if (winner){
            status = "Player " + winner + " Has Won!"
        } else {
            if (all_clicked) {
                status = "It's a draw!"
            } else {
                let t = turn ? "1" : "2"
                status = "Player " + t + " Turn"
            }
        }

        return(

            <Container className="text-center">
                <h1>{status}</h1>
                <Button variant="outline-dark" className="m-3" onClick={this.handleBoardRestart}>Restart</Button>
                {values.map((val, index) => (<Row key={index}>
                    {val.map((v, i) => (<Col className="p-1" key={i}>
                        <Square key={index * 3 + i} value={this.state.boxes[index * 3 + i]} onClick={() => this.handleBoxClick(index * 3 + i)}/>
                    </Col>))}
                </Row>))}
            </Container>
        )
    }
}