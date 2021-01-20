import React, { ElementType } from 'react'
import { Redirect, Route, RouteChildrenProps } from 'react-router-dom'

interface PublicRouteInterface{
    isLogin: boolean,
    component: ElementType,
    path: string
}
export const PublicRoute = ({
    isLogin,
    component: Component,
    ...ref
}: PublicRouteInterface) => {
    return (
       <Route { ...ref}
            component={ (props:RouteChildrenProps) => 
                !isLogin ? 
                    <Component { ...props } /> : 
                    <Redirect to="/home" />
            }
       /> 
    )
}
