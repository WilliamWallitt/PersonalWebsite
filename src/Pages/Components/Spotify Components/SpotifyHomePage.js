import React from 'react'
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import WallpaperSpotify from "../../../Assets/Images/SpotifyWallpaper.jpg"
// import Spotify_Playlist from "./Spotify_Playlist";

import * as $ from "jquery"
import Spotify_Playlist from "./Spotify_Playlist";
const queryString = require("query-string")

const image_styling = {

    backgroundImage: "url(" + WallpaperSpotify + ")",
    height: "95vh",
    width: "100vw",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"

}

// our main spotify endpoint
export const authEndpoint = 'https://accounts.spotify.com/authorize';

const clientId = "26ec544d2c734f7a93baacf81d15bd7e";
const clientSecret = "76299d326a5a4ee582ed5e104b4a180e";
const redirectUri = "http://localhost:3000/spotify";
const scopes = 'user-read-private user-read-email playlist-read-private user-library-read playlist-read-collaborative playlist-modify-private user-read-recently-played';

const redirect = 'https://accounts.spotify.com/authorize?response_type=code' +
    '&client_id=' + clientId + "&scope=" + encodeURIComponent(scopes) + '&redirect_uri=' + encodeURIComponent(redirectUri)

class SpotifyHomePage extends React.Component {

    state = {
        success: false,
        token: null,
        refresh: null,
        scope: null
    }

    componentDidMount() {
        this.auth_handler()
    }


    auth_handler = () => {
        let parsed = queryString.parse(window.location.search);
        let accessToken = parsed.code
        let _self = this

        $.ajax(
            {
                method: "POST",
                url: "https://accounts.spotify.com/api/token",
                data: {
                    "grant_type":    "authorization_code",
                    "code":          accessToken,
                    "redirect_uri":  redirectUri,
                    "client_secret": clientSecret,
                    "client_id":     clientId,
                },
                success: function(result) {
                    _self.setState({
                        success: true,
                        token: result.access_token,
                        refresh: result.refresh_token,
                        scope: result.scope
                    })
                },
            }
        )

    }

    render() {

        if (this.state.token) {
            return (
                <Spotify_Playlist
                    access_token={this.state.token}
                    refresh_token={this.state.refresh}
                    scope={this.state.scope}
                />
            )
        }

        return (

            <Container className="d-flex text-center align-items-center justify-content-center" fluid style={{width: "100vw", height: "100vh", fontFamily: "Muli"}} style={image_styling}>

                <Button className= "btn-success btn-lg active rounded-lg" href={redirect}>Log into Spotify</Button>

            </Container>

        )
    }
}


export default SpotifyHomePage

