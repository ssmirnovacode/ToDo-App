import React, {useState} from 'react';
import './login.scss';
import firebase from '../../firebase.config';

const initialLoginState = {
    isResetEmailSent: false,
    loginError: '',
    user: {
        email: '',
        password: ''
    }
};

const LoginForm = (props) => {

    const [loginState, setLoginState] = useState(initialLoginState);
    const onLabelChange = (e) => {
        setLoginState(loginState => ({
            ...loginState,
            user: {
                ...loginState.user,
                [e.target.name]: e.target.value
            }
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (props.confirmEmailSent) {
            setLoginState(loginState => ({
                ...loginState,
                loginError: 'Please confirm your email or reload the page'
            }));
            return;
        }
        firebase.auth().signInWithEmailAndPassword(loginState.user.email, loginState.user.password)
        .then( () => props.setConfirmEmailSent(false))
        .then(() => {
            setLoginState(initialLoginState);      
        })
        .catch(err => setLoginState(loginState => ({
            ...loginState,
            loginError: err.message === 'The email address is badly formatted.' ? 'Please confirm your email or reload the page' : err.message
        })));  
    }

    const resetPassword = () => {
        firebase.auth().sendPasswordResetEmail(loginState.user.email)
        .then(() => setLoginState(loginState =>({
            ...loginState,
            isResetEmailSent: true
        })))
        .catch(err => setLoginState(loginState => ({
            ...loginState,
            loginError: err.message
        })));
    }

    return(
        <form className="login-form d-flex" onSubmit={onSubmit}>
            <label htmlFor="email">Email: </label>
             <input required type="email" className="form-control" name="email"
                onChange={onLabelChange} 
                placeholder="Enter your email"
                value={loginState.email} />
            <label htmlFor="password">Password: </label>
            <input required type="password" className="form-control" name="password"
                onChange={onLabelChange} 
                placeholder="Enter your password"
                value={loginState.password} />
                {
                loginState.loginError ? <div className="err-message">{loginState.loginError}</div> : null
                }
            
            {
                loginState.isResetEmailSent ? 
                <span className="login-span email-sent">Password reset instructions have been sent to <span className="login-span">{loginState.user.email}</span></span> : 
                <span className="login-span" onClick={resetPassword}>Forgot your password?</span>
            }
            <button className="btn btn-outline-secondary" type="submit">Login</button>     
        </form>
    )
}

export default LoginForm;