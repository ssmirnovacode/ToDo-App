import React, {useState} from 'react';
import './username.scss';

const UsernameForm = (props) => {

    const [label, setLabel] = useState('');

    const onLabelChange = (e) => {
        setLabel(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        props.onLogin(label);
        setLabel('');  
    }

    return(
        <form className="item-add-form d-flex" onSubmit={onSubmit}>
            <input required type="text" className="form-control" 
                onChange={onLabelChange} 
                placeholder="Enter your name"
                value={label} />
            <button className="btn btn-outline-secondary">Login</button>
        </form>
    )
}

export default UsernameForm;