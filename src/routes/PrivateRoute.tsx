import React from 'react'
import { Redirect, Route, RouteChildrenProps } from 'react-router-dom'

interface PrivateRouteInterface{
    isLogin: boolean,
    component: any,
    path: string
}

export const PrivateRoute = ({
    isLogin,
    component: Component,
    ...ref
}: PrivateRouteInterface) => {
    return (
        <Route { ...ref } component={ ( props:RouteChildrenProps ) => 
            isLogin 
                ? <Component { ...props }/>
                : <Redirect to="/auth/login" />
        }/>
    )
}
