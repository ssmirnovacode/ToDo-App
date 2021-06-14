import React, {useState} from 'react';
import { db } from '../../firebase.config';

const initialRegState = {
    username: '',
    email: '',
    password: '',
    password2: ''
}

const handleRegister = (data) => {

}

const RegisterForm = (props) => {

    const [regState, setRegState] = useState(initialRegState);

    const onLabelChange = (e) => {
        setRegState({
            ...regState,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleRegister(regState); // to be changed
        setRegState(initialRegState);  
    }

    return(
        <form className="item-add-form d-flex" onSubmit={onSubmit}>
            <label htmlFor="username-reg">Email: </label>
            <input required type="email" className="form-control" name="username-reg"
                onChange={onLabelChange} 
                placeholder="Enter your name"
                value={regState.username} />
            <label htmlFor="email-reg">Email: </label>
            <input required type="email" className="form-control" name="email-reg"
                onChange={onLabelChange} 
                placeholder="Enter your email"
                value={regState.email} />
            <label htmlFor="pass-reg">Password: </label>
            <input required type="password" className="form-control" name="pass-reg"
                onChange={onLabelChange} 
                placeholder="Enter your password"
                value={regState.password} />
            <label htmlFor="pass-2-reg">Repeat password: </label>
            <input required type="password" className="form-control" name="pass-2-reg"
                onChange={onLabelChange} 
                placeholder="Repeat your password"
                value={regState.password2} />
            <button className="btn btn-outline-secondary" type="submit">Sign up</button>
        </form>
    )
}

export default RegisterForm;