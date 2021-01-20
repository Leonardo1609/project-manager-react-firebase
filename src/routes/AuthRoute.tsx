import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CreateAccount } from '../pages/CreateAccount'
import { Login } from '../pages/Login'

export const AuthRoute = () => {
    return (
        <Switch>
            <Route exact path="/auth/login" component={ Login }/>
            <Route exact path="/auth/create-account" component={ CreateAccount }/>
            <Redirect to="/auth/login" />
        </Switch>
    )
}
