import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../shared/Loading/Loading';


const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const navigateLogin = event => {
        navigate('/login');
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/');
    }
    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/');
    };

    return (
        <div className='register-container'>
            <div className='register-form'>
            <h2 style={{ textAlign: 'center' }} className='text-primary text-center mt-4'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Your name' />
                <input type="email" name='email' placeholder='Your email' />
                <input type="password" name='password' placeholder='password' />
                <input onClick={() => setAgree(!agree)} type="checkbox" name='terms' id='terms' />
                <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms"> Accept Terms and Conditions</label>
                <input disabled={!agree} className='w-50 mx-auto btn btn-primary mt-2' type="submit" value="Register" />
            </form>
            <p className='text-center'>Already have an account ? <span className='please-register text-danger' onClick={navigateLogin}>Please Login</span></p>
            <SocialLogin></SocialLogin>
        </div>
        </div>
    );
};

export default Register;