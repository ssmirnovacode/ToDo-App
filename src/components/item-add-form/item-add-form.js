import React, {useState} from 'react';
import './item-add-form.scss';

const ItemAddForm = (props) => {

    const [label, setLabel] = useState('');

    const onLabelChange = (e) => {
        setLabel(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        props.onAdd(label);
        setLabel('');  
    }

    return(
        <form className="item-add-form d-flex" onSubmit={onSubmit}>
            <input required type="text" className="form-control" 
                onChange={onLabelChange} 
                placeholder="What needs to be done?"
                value={label} />
            <button className="btn btn-outline-secondary">Add item</button>
        </form>
    )  
};

export default ItemAddForm;