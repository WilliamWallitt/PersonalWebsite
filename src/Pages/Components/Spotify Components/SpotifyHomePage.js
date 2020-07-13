import React from 'react'
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import WallpaperSpotify from "../../../assets/Images/SpotifyWallpaper.jpg"


import * as $ from "jquery"
import Spotify_Playlist from "./Spotify_Playlist";
const queryString = require("query-string")

const image_styling = {

    backgroundImage: "url(" + WallpaperSpotify + ")",
    height: "95vh",
    width: "100vw",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

}

// our main spotify endpoint
const clientId = "26ec544d2c734f7a93baacf81d15bd7e";
const clientSecret = "76299d326a5a4ee582ed5e104b4a180e";

let redirectUri

if (window.location.href.toString().substr(0, 29) !== "http://localhost:3000/spotify") {
    redirectUri = "https://williamwallitt.herokuapp.com/spotify"
} else {
    redirectUri = "http://localhost:3000/spotify";
}

const scopes = 'user-read-private user-read-email playlist-read-private user-library-read playlist-read-collaborative playlist-modify-private user-read-recently-played streaming';

const redirect = 'https://accounts.spotify.com/authorize?response_type=code' +
    '&client_id=' + clientId + "&scope=" + encodeURIComponent(scopes) + '&redirect_uri=' + encodeURIComponent(redirectUri)

class SpotifyHomePage extends React.Component {

    state = {
        success: false,
        token: null,
        refresh: null,
        scope: null,
        clicked: false,
        refresh_token: false
    }


    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        localStorage.getItem("token") === null && localStorage.setItem('token', this.state.token)
        this.token_handler()
    }

    auth_handler = () => {

        let parsed = queryString.parse(window.location.search);
        let accessToken = parsed.code
        let _self = this

        try {
            if (localStorage.getItem("token") === null) {

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

                            localStorage.setItem('token', result.access_token)

                        }, error: function(err) {
                            console.log(err)
                        }
                    }
                )

            }

        } catch (e) {
            console.log(e)
        }


    }


    token_handler = () => {

        let date_object = new Date()

        // if we don't have a token time
        if (localStorage.getItem("time") === null) {
            // add one hour to current time and store it as the token expire time
            date_object.setHours(date_object.getHours() + 1)
            let current_time = date_object.getHours() + ":" + date_object.getMinutes() +  ":" +  date_object.getSeconds();
            localStorage.setItem("time", current_time)

            return false
        // if we do
        } else {
            // we get the current time and compare it - if its greater than the expire time, we need to refresh the token
            let current_time = (date_object.getHours() +  ":" + date_object.getMinutes() +  ":" + date_object.getSeconds()).toString()
            let expire_time = localStorage.getItem("time").toString()
            if (current_time.substr(0, 2) >= expire_time.substr(0, 2) && current_time.substr(3, 5) > expire_time.substr(3, 5)){
                localStorage.removeItem("time")
                localStorage.removeItem("token")
                return true
            } else {
                return false
            }
        }
    }

    render() {

        // if we have a token that hasnt expired and we have the time stored in local storage

        if (!this.token_handler() && localStorage.getItem("time") !== null && localStorage.getItem("token") !== null){

            if (localStorage.getItem("token") || this.state.token){

                return (

                    <Spotify_Playlist
                        access_token={this.state.token === null ? localStorage.getItem("token") : this.state.token}
                        refresh_token={this.state.refresh}
                        scope={this.state.scope}
                    />
                )
            }

        } else {

            console.log("sign in")

            return (

                <Container className="d-flex text-center align-items-center justify-content-center" fluid style={{width: "100vw", height: "100vh", fontFamily: "Muli", ...image_styling}}>

                    <Button className= "btn-outline-dark btn-large text-dark shadow-lg bg-transparent p-3" href={redirect} onClick={this.auth_handler()}>Log into Spotify</Button>

                </Container>

            )
        }
    }
}



export default SpotifyHomePage

