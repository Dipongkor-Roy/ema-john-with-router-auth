import React from 'react';
import './LogIn.css'
const LogIn = () => {
    return (
        <div className='form-container'>
            <h3 className='form-title'>Log In</h3>
            <form >
                <div className='form-control'>
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
            </form>
        </div>
    );
};

export default LogIn;