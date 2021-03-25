import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthService from './auth.service'


const ProtectedRoute = ({component:Component, ...rest}) => {
    return (
        <Route {...rest} render={
            props=>{
                if (AuthService.isAuthenticated()) {
                    return <Component {...props}/>
                }else{
                    return <Redirect to='/'/>
                }
            }
           

        }/>
    )
}

export default ProtectedRoute
