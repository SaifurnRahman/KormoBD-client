import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);
    const location = useLocation();

    if(loading){
        return (
             <div className="flex items-center justify-center gap-2 py-10">
      <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" />
    </div>
        )
    }

    if (!user){
     return <Navigate to="/login" state={location.pathname}></Navigate>
    }
    return children;
};

export default PrivateRoute;