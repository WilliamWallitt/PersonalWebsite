import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import HomeComponent from "./Components/HomeComponent";
import Footer from "./StatelessComponents/Footer";

function HomePage(){

    return (
        <div style={{position: "relative"}}>
            <HomeComponent style={{zIndex: "-1"}}/>
            <Jumbotron className="m-5 p-2" style={{position: "absolute", top: "0px", left:"0px", backgroundColor: 'rgba(255, 255, 255, 0.8)', fontFamily: "Muli"}}>
                <h1 className="h3"><code>[William Wallitt]</code> - Full Stack Software Engineer</h1>
                <p className="lead"><strong>FrontEnd</strong>:<code> React, Redux, Bootstrap, Javascript, JQuery, HTML5, CSS, API's </code></p>
                <p className="lead"><strong>BackEnd</strong>:<code> Node.js, Express.js, MongoDB, mySQL, RESTful Routing, Firebase</code></p>
            </Jumbotron>
            <Footer/>
        </div>

    )
}

export default HomePage