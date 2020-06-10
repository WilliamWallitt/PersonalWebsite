import React from "react";
import GithubComponent from "./Components/GithubComponent";


export default function GitPage() {
    return(
        <GithubComponent req="https://api.github.com/users/WilliamWallitt/repos"/>
    )
}