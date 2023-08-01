import React, { useState } from 'react';
import { AuthContext } from '../Contexts/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
   const {user,loading}=useState(AuthContext);
   const location=useLocation(); 
   if(loading){
      return <div>Loading...</div>
   }
   if(user && user.uid){
    return children;
   }
   return <Navigate to='/logIn' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;