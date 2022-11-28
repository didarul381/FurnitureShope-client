import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const DisplayEror = () => {
    const navigate=useNavigate()
    const{logOut}=useContext(AuthContext);
    const error=useRouteError()
    const handleLogOut=()=>{
        logOut()
        .then(()=>{
        navigate('/login')
        })
        .catch(err=>console.error(err))
       
    }
    return (
        <div>
        <p className='text-red-500 bg-red-500'>Somrthing went wrong..</p>
        <p>{error.statusText || error.message}</p>
        <h4>please LogOut<button onClick={handleLogOut}>SingOut</button></h4>
    </div>
    );
};

export default DisplayEror;