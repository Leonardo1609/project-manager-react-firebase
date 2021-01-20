import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { Home } from '../pages/Home';
import { AuthRoute } from './AuthRoute';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRoute = () => {
    const [ isLogin, setIsLogin ] = useState<boolean>( false );
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
