import React, {useState} from 'react';
import './register.scss';
import firebase from '../../firebase.config';

const initialRegState = {
    username: '',
    email: '',
    password: '',
    password2: ''
}

const RegisterForm = (props) => {

    const [regState, setRegState] = useState(initialRegState);

    const onLabelChange = (e) => {
        setRegState({
            ...regState,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = (data) => {
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then(() => firebase.auth().currentUser.updateProfile({
            displayName: data.username,
            photoURL: null
        }))
        .then( () => firebase.auth().currentUser.sendEmailVerification().then(() => props.setConfirmEmailSent(true)) )
        .then( () => props.onRegister())
        .catch (err => console.error(err.message))
    
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (regState.password === regState.password2) {
            handleRegister(regState);
            setRegState(initialRegState); 
        }
        else return;
        
    }

    return(

        <form className="register-form d-flex" onSubmit={onSubmit}>
            <label htmlFor="username">Username: </label>
            <input required type="text" className="form-control" name="username"
                onChange={onLabelChange} 
                placeholder="Enter your name"
                value={regState.username} />
            <label htmlFor="email">Email: </label>
            <input required type="email" className="form-control" name="email"
                onChange={onLabelChange} 
                placeholder="Enter your email"
                value={regState.email} />
            <label htmlFor="pass">Password: </label>
            <input required type="password" className="form-control" name="password"
                onChange={onLabelChange} 
                placeholder="Enter your password"
                value={regState.password} />
            <label htmlFor="pass-2">Repeat password: </label>
            <input required type="password" className="form-control" name="password2"
                onChange={onLabelChange} 
                placeholder="Repeat your password"
                value={regState.password2} />
                {
                    regState.password === regState.password2 ? null : <div className="err-message">Passwords don´t match!!</div>
                }
            <button className="btn btn-outline-secondary" type="submit">Sign up</button>
        </form>
        
    )
}

export default RegisterForm;