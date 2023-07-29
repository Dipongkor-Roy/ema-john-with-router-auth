import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
import { AuthContext } from '../Contexts/UserContext';

const SignUp = () => {
    const [error,setError]=useState(null);
    
    const {createUser}=useContext(AuthContext);

    const handleSubmit=(event)=>{
        event.preventDefault();//to prevent reload
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const confirm=form.confirm.value;

        if(password.length<8){
            setError('Password Less than 8 characters');
            return;
        }
        if(password !== confirm){
            setError('Dont Match Password');
            return;
        }
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            form.reset();
        })
        .catch(error=>console.error(error))
    }
    return (
        <div className='form-container'>
            <h3 className='form-title'>Sign Up</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>
                <input className='btn-submit' type="submit" value="SignUp" />
            </form>
            <p className='text-down-btn'>Already have an account? <Link to="/logIn" className='new-acc'>Log In</Link></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;