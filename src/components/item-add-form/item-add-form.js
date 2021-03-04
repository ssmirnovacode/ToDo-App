import React, {Component} from 'react';
import './item-add-form.css';

export class ItemAddForm extends Component {

    state = {
        label: ''
    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        /* if (this.state.label !== '') { */
            this.props.onAdd(this.state.label);
            this.setState({
                label: ''
            });
        /* }
        else {

        }  */     
    }

    render() {

        return(
            <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
                <input required type="text" className="form-control" 
                    onChange={this.onLabelChange} 
                    placeholder="What needs to be done?"
                    value={this.state.label} />
                <button className="btn btn-outline-secondary">Add item</button>
            </form>
        )
    }
};

export default ItemAddForm;