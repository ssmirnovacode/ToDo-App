import React, {Component} from 'react';
import './item-status-filter.css';

class ItemStatusFilter extends Component {

  render() {

    const buttons = [
    {name: "all", label: "All"},
    {name: "active", label: "Pending"},
    {name: "done", label: "Done"}
  ];
  
    return (
      <div className="btn-group">
        {
          buttons.map(btn => {
            const isActive = this.props.filter === btn.name;
            const btnClass = isActive ? "btn btn-info" : "btn btn-outline-secondary";
            return(
              <button type="button" id={btn.name}
              className={btnClass} onClick={(e) => {this.props.onSwitch(e.target.id)}}>{btn.label}</button>
            )
          })
        }
      </div>
    );
  }
};

export default ItemStatusFilter;