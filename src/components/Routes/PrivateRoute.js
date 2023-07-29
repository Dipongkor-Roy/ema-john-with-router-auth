import React, { useState } from 'react';
import { AuthContext } from '../Contexts/UserContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
   const {user}=useState(AuthContext)
   if(user && user.uid){
    return children;
   }
   return <Navigate to='/logIn'></Navigate>
};

export default PrivateRoute;