import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);



    const auth = getAuth();


    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    console.log('came from', location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleRegistration = (e) => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must Be At Least 6 Characters Long. ')
            return;
        }

        isLogin ? processLogin(email, password) : createNewUser(email, password);

    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                verifyEmail();
                setUserName();
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div>

            <div className="mx-auto w-50 login-form ">
                <form onSubmit={handleRegistration}>
                    <h2 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h2>
                    {!isLogin && <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                            <input onBlur={handleNameChange} type="name" class="form-control" id="inputEmail3" required />
                        </div>
                    </div>}
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" class="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" onBlur={handlePasswordChange} class="form-control" id="inputPassword3" required />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-sm-10 offset-sm-2">
                            <div class="form-check">
                                <input onChange={toggleLogin} class="form-check-input" type="checkbox" id="gridCheck1" />
                                <label class="form-check-label" for="gridCheck1">
                                    Already Registered?
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3 text-danger">{error}</div>
                    <button type="submit" class="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>
                </form>

            </div>



            <div>--------------Or-----------------</div>

            <button onClick={handleGoogleLogin} className="btn btn-warning mb-3">Google Sign In</button>
        </div>
    );
};

export default Login;