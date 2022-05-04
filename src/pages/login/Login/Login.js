import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../shared/Loading/Loading';


const Login = () => {
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error1,
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef({});
    const passwordlRef = useRef({});
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordlRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement =
            <p className='text-danger'>Error: {error.message}</p>
    }
    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sending password reset email');
        }
        else {
            toast('Please enter your email address');
        };

    }
    return (
<div className='login-container'>
    
<div className='container login mx-auto'>
            <h2 className='text-primary text-center mt-4'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    
                    <Form.Control ref={passwordlRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>

            </Form>
            <p> New to Fruits Warehouse ? <span className='please-register text-primary' onClick={navigateRegister}>Please Register</span></p>
            <p> Forget Password ? <span className='please-register text-primary' onClick={resetPassword}>Reset Password</span></p>
            {errorElement}
            <SocialLogin></SocialLogin>
            <ToastContainer />
            {/* <PageTitle title="Login"></PageTitle> */}
        </div>
</div>

    );
};

export default Login; 