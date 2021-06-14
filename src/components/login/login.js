import React, {useState} from 'react';
import './login.scss';
import firebase from '../../firebase.config';

const initialLoginState = {
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
        firebase.auth().signInWithEmailAndPassword(loginState.user.email, loginState.user.password)
        .then(() => {
            setLoginState(initialLoginState);      
        })
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
            <button className="btn btn-outline-secondary" type="submit">Login</button>     
        </form>
    )
}

export default LoginForm;