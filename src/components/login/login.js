import React, {useState} from 'react';

const initialLoginState = {
    username: '',
    password: ''
};

const LoginForm = (props) => {

    const [loginState, setLoginState] = useState(initialLoginState);

    const onLabelChange = (e) => {
        setLoginState({
            ...loginState,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        props.onLogin(loginState); // to be changed
        setLoginState(initialLoginState);  
    }

    return(
        <form className="item-add-form d-flex" onSubmit={onSubmit}>
             <input required type="email" className="form-control" name="email-reg"
                onChange={onLabelChange} 
                placeholder="Enter your email"
                value={loginState.email} />
            <label htmlFor="pass-reg">Password: </label>
            <input required type="password" className="form-control" name="pass-reg"
                onChange={onLabelChange} 
                placeholder="Enter your password"
                value={loginState.password} />
            <button className="btn btn-outline-secondary" type="submit">Login</button>
        </form>
    )
}

export default LoginForm;