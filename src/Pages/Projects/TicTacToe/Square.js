import React from 'react'
import Button from "react-bootstrap/Button";
export default class Square extends React.Component {

    render() {

        const buttonStyle = {
            width: "100%",
            height: "12vw",
            fontFamily: "Arial",
            fontSize: "5em"

        };

        return(
            // now we can set our onclick listener
            <Button variant="outline-dark" style={buttonStyle} onClick={this.props.onClick}>
                {this.props.value}
            </Button>
        )
    }
}