import React, {Component} from 'react';
import './item-add-form.css';

export class AddForm extends Component {

    render() {

        return(
            <div className="item-add-form">
                <button className="btn btn-outline-secondary" onClick={() => this.props.onAdd('Practice mindfulness')}>Add item</button>
            </div>
        )
    }
};

export default AddForm;