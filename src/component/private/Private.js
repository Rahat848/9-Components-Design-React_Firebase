import React from 'react';
import {Navigate, Outlet } from 'react-router-dom';
import UseAuth from '../../context/UseAuth';

const Private = () => {
    const {user} = UseAuth();
    return (
        <div>
            {
         user.displayName? <Outlet/> : <Navigate to ={'/notfound'}/>
        }
        </div>
    );
};

export default Private;