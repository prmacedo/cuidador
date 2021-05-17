import React from 'react'

import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ type, component: Component, ...rest }) => {
  const role = JSON.parse(localStorage.getItem("user"))?.role;

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
