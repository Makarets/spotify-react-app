import React, { Component } from "react"
import { authEndpoint, clientId, redirectUri, scopes } from "../config"
import "../main.scss"


const LoginPage = () => {

    return(
        <div className="container">
            <div className="auth-block">
                <img src="/src/assets/img/sf_logo.png" alt="" className="sf-logo"/>
                <a href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                    "%20")}&response_type=token&show_dialog=true`} className="login-btn__green">Login to Spotify</a>
            </div>
        </div>
    )
}

export default LoginPage