import React from 'react'

import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ type, component: Component, ...rest }) => {
  const role = JSON.parse(localStorage.getItem("user"))?.role;
  const token = JSON.parse(localStorage.getItem("user"))?.token;
  //vALIDAR TOKEN MANDANDO PRO BACK (CRIAR ENDPOINT BACKEND)
  return (
    <Route {...rest} render={
      props => {
        if (role === type) {
          return <Component {...props} />
        } else {
          return <Redirect to='/' />
        }
      }
    } />
  );
}

export default ProtectedRoute;
