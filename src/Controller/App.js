import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from '../Pages/HomePage';
import ProjectsPage from "../Pages/ProjectsPage";
import AboutPage from "../Pages/AboutPage";
import Game from "../Pages/Projects/TicTacToe/Game";
import GitPage from "../Pages/Github";
import MenuComponent from "../Pages/Components/MenuComponent";
import LoginPage from "../Pages/LoginComponents/LoginPage";
import Logout from "../Pages/Components/Logout/Logout";
import SpotifyHomePage from "../Pages/Components/Spotify Components/SpotifyHomePage";


export default function App() {

  return (

      <Router>

        <MenuComponent/>

        <Switch>

          <Route path="/projects/tictactoe">
            <GridBoard/>
          </Route>

          <Route path='/projects/astar' component={() => {
            window.location.href = 'https://astaralgorithm.herokuapp.com/';
            return null;
          }}/>

          <Route path='/projects/stcezair' component={() => {
            window.location.href = 'https://www.st-cezaire.com/';
            return null;
          }}/>

          <Route path='/projects/yelpcamp' component={() => {
            window.location.href = 'https://lit-dusk-54286.herokuapp.com/';
            return null;
          }}/>

          <Route path="/logout" component={Logout}/>

          <Route path="/spotify" component={SpotifyHomePage}/>

          <Route path="/github">
            <GitPage/>
          </Route>

          <Route path="/login">
            <LoginPage/>
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </Router>
  );
}

function Home() {
  return <HomePage/>
}

function About() {
  return <AboutPage/>
}

function Projects() {
  return <ProjectsPage/>
}

function GridBoard(){
  return <Game/>
}