import React, {Component, useState} from "react"
import { Route, Switch, Redirect } from 'react-router-dom'
import LoginPage from "./LoginPage"
import HomePage from "./HomePage"
import hash from "../hash"

const App = () => {
    const [token, setToken] = useState(hash.access_token)
    return(
        <div className="main">
            <Switch>
                <Route exact path='/' render={props => (
                    token ?
                        <HomePage />
                        : <Redirect to="/login" />
                )}/>
                <Route path='/login' component={LoginPage}/>
            </Switch>
        </div>
    )
}


export default App

// <Route exact path='/' component={HomePage}/>