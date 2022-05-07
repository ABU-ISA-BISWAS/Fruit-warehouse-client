import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../shared/Loading/Loading';


const Register = () => {
    const [agree, setAgree] = useState(false);
    let errorElement;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);
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
    if(error){
        errorElement =
            <p className='text-danger'>Error: {error.message}</p>
    }

    return (
        <div className='register-container'>
            <div className='register-form animate__animated animate__zoomIn'>
            <h2 style={{ textAlign: 'center' }} className='text-primary text-center mt-4'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input style={{color:'blue',border:'1px solid blue'}} type="text" name='name' placeholder='Your Name' />
                <input style={{color:'blue',border:'1px solid blue'}} type="email" name='email' placeholder='Your Email' />
                <input style={{color:'blue',border:'1px solid blue'}} type="password" name='password' placeholder='Password' />
                <input onClick={() => setAgree(!agree)} type="checkbox" name='terms' id='terms' />
                <label className={agree ? 'ps-2 text-success' : 'ps-2 text-danger'} htmlFor="terms"> Accept Terms and Conditions</label>
                <input disabled={!agree} className='w-50 mx-auto btn btn-success mt-2' type="submit" value="Register" />
                {errorElement}
            </form>
            <p className='text-center'>Already have an account ? <span className='please-register text-primary' onClick={navigateLogin}>Please Login</span></p>
            <SocialLogin></SocialLogin>
        </div>
        </div>
    );
};

export default Register;