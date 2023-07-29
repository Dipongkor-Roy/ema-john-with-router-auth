import React, { useContext } from 'react';
import './LogIn.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
const LogIn = () => {
    const {signIn}=useContext(AuthContext)

    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        signIn(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            form.reset();
        })
        .catch(error=>console.error(error));
    }
    return (
        <div className='form-container'>
            <h3 className='form-title'>Log In</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='btn-submit' type="submit" value="LogIn" />
            </form>
            <p className='text-down-btn'>New to Ema-John? <Link to="/signUp" className='new-acc'>Create New Account</Link></p>
        </div>
    );
};

export default LogIn;