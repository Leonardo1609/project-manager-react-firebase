import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { login } from '../actions/authActions';
import { app } from '../firebase/config';
import { Home } from '../pages/Home';
import { AuthRoute } from './AuthRoute';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRoute = () => {
    const dispatch = useDispatch();
    const [ isLogin, setIsLogin ] = useState<boolean>( false );

    useEffect(() => {
        app.auth().onAuthStateChanged( user => {
            if( user?.uid && user?.displayName ){
                dispatch( login( user.uid, user.displayName ) );
                setIsLogin( true )
            } else{
                setIsLogin( false )
            }
        });
    }, [ dispatch ])

    return (
        <Router>
            <Switch>
                <PublicRoute 
                    isLogin={ isLogin }
                    component={ AuthRoute } 
                    path="/auth"
                />
                <PrivateRoute 
                    isLogin={ isLogin }
                    component={ Home }
                    path="/"
                />

                <Redirect to="/auth/login" />
            </Switch>
        </Router>        
    )
}
