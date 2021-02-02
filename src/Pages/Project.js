import React from "react"
import '../assets/Stylesheets/project..css';
import {
    Link
} from "react-router-dom";

export default class project extends React.Component {

    state = {
        name: this.props.name,
        description: this.props.description,
        linkTo: this.props.linkTo,
        image: this.props.image
    }

    render() {
        return (

            <div className="post">
                <Link to={this.state.linkTo}>
                    <img className="thumbnail"
                         src={this.state.image}/>
                </Link>
                <div className="post-preview">
                    <h1 className="post-title">{this.state.name}</h1>
                    <p className="post-intro lead">{this.state.description}</p>
                    <a>______</a>
                </div>
            </div>

        );
    }


}
