import React from 'react';
import Google from '../../../images/social/Google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        errorElement =
            <p className='text-danger'>Error: {error.message}</p>
    }

    if (user) {
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-success w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-success w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-75 mx-auto d-block mb-2'>
                    <img style={{ width: '20px' }} src={Google} alt="" />
                    <span className='px-2'>Sign In With Google</span>
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;