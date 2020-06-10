import React, { Component } from 'react'
import Data from "../../Controller/search.json"
import ListGroup from "react-bootstrap/ListGroup";

const source = Data


const initialState = {
    isLoading: false,
    results: [],
    value: ''
}



export default class SearchExampleStandard extends Component {

    show_list = () => {
        let elems = document.getElementsByClassName("vis")

        for (let i = 0; i < elems.length; i++) {
           elems[i].style.display = ""
        }

    }


    state = initialState

    render() {

        return (

            <form className="form-inline my-2 my-lg-0" id="dropdown">
                <input className="form-control mr-sm-2" onClick={this.show_list}  type="search" placeholder="Search" aria-label="Search"/>
                <ListGroup>
                    {source.map( value => <ListGroup.Item className="vis" style={{display: "none"}} href="/">{value.title + " " + value.link}</ListGroup.Item>)}
                </ListGroup>
                {/*<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
            </form>
        )
    }


}