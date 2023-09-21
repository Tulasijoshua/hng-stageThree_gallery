import React, { useState } from 'react'
import './login.css';
import LoginImg from './loginImg.png'
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [login, setLogin] = useState(true);
    const navigate = useNavigate()

    const handleAuth = (e, type) => {
        e.preventDefault()
        
        const email = e.target.email.value
        const password = e.target.password.value

        if(type == 'Signup') {
            createUserWithEmailAndPassword(auth, email, password).then(data => {
                console.log(data, "signup");
                navigate('/')
            }).catch(err => {
                alert(err)
                console.log(err)
                // setLogin(true)
            })

        } else {
            signInWithEmailAndPassword(auth, email, password).then(data => {
                console.log(data, "Signin");
                navigate('/')
            }).catch(err => {
                alert(err.code)
            })
        }
    }
    return (
        <div className='main-login'>
            <div className='login-container'>
                <div className='login-section'>
                    <div className='center-login'>
                        <div></div>
                        <div className='login-name'>
                            <h2>{login ? 'Sign In' : 'Sign Up'}</h2>
                            <p>{login ? 'Sign in' : 'Sign up'} and view an amazing gallery of pictures</p>
                        </div>
                        <div className='email-alignment'>
                            <div className='left-line'></div>
                            <div className='line-text'>{login ? 'Sign in' : 'Sign up'} with Email</div>
                            <div className='right-line'></div>
                        </div>
                        <div className='main-form'>
                            <form onSubmit={(e) => handleAuth(e, login ? 'Signin' : 'Signup')}>
                                <div className={`form-detail ${login ? 'displayNone' : ''}`}>
                                    <label htmlFor="firstName">First Name</label>
                                    <input type='text' name='fname' placeholder='First Name' />
                                </div>
                                <div className={`form-detail ${login ? 'displayNone' : ''}`}>
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type='text' name='lname' placeholder='Last Name' />
                                </div>
                                <div className='form-detail'>
                                    <label htmlFor="email">Email</label>
                                    <input name="email" placeholder='Email' />
                                </div>
                                <div className='form-detail'>
                                    <label htmlFor="password">Password</label>
                                    <input name="password" type='password' placeholder='Password' />
                                </div>
                                <div className='form-detail'>
                                    <button className='btn-submit'>{login ? 'Sign in' : 'Sign up'}</button>
                                </div>
                                <div className='signup-in'>
                                    {login 
                                        ? <div onClick={() =>setLogin(false)}>You do not have an account? <span className='pointer'>Sign up now</span> </div>
                                        : <div onClick={() =>setLogin(true)}>Already have an account? <span className='pointer'>Sign in</span></div>
                                    }
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                <div className='img-section'>
                    <div className='img-container'>
                    <img src={LoginImg} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login