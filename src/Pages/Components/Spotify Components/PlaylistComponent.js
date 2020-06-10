import React from 'react'
import {Card, Container, ListGroup} from "react-bootstrap";
import * as $ from "jquery";
import API_Request_Handler from "./API_Request_Handler";

export default class PlaylistComponent extends React.Component {

    state = {
        playlist: {
            displayTracks: false,
            image: null,
            name: null,
            description: null
        },
        trackList: {
            track_url: null,
            tracks: []
        }
    }


    componentDidMount() {


        this.setState({
            playlist: {
                displayTracks: false,
                image: this.props.image,
                name: this.props.name,
                description: this.props.description
            },
            trackList: {
                track_url: this.props.url,
                tracks: []
            }
        })

        $.ajax({
            url: this.props.url,
            type: "GET",
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + this.props.token);
            },
            success: data => {
                // console.log(data)
                let items = data.items
                let track_list = []
                // items[index].track. (artists[index].name) or track.name

                items.map((item, index) => {

                    let artist_song = []

                    if (item.track !== null) {
                        artist_song.push(item.track.name)

                        if (item.track.artists !== null) {
                            for (let i = 0; i < item.track.artists.length; i++) {
                                artist_song.push(item.track.artists[i].name)
                            }
                        }
                    }

                    track_list.push(artist_song)

                })
                this.setState(prevState => ({
                    trackList: {
                        ...prevState.trackList,
                        tracks: track_list
                    }
                }))

            }
        })

    }


    onClickHandler = () => {
        let value = this.state.playlist.displayTracks
        
        // eslint-disable-next-line react/jsx-pascal-case
        this.setState(prevState => ({
            playlist: {
                ...prevState.playlist,
                displayTracks: !value
            }
        }))

    }


    render() {


        if (this.state.playlist.displayTracks) {
            return (
                <Card className="shadow-lg border-dark text-center mt-5" onClick={this.onClickHandler} style={{ width: '100%', fontFamily: "Muli"}}>
                    <Card.Title className="lead mt-5"><code>{this.state.playlist.name}</code></Card.Title>
                    <Card.Body>
                        <ListGroup style={{height: "30vh", overflow: "auto"}}>
                            {this.state.trackList.tracks.map( (item, index) => (
                                <ListGroup.Item action variant="light text-dark" key={index}><strong>{item[0]}</strong> <br/> {item[1]}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card.Body>
                </Card>

                )
        }

        return (
                <Card className="shadow-lg border-dark text-center mt-5" onClick={this.onClickHandler} style={{ width: '100%', fontFamily: "Muli"}}>
                    <Card.Img variant="top" src={this.state.playlist.image} />
                    <Card.Body>
                        <Card.Title><code>{this.state.playlist.name}</code></Card.Title>
                        <Card.Text>
                            {this.state.playlist.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )

    }


}