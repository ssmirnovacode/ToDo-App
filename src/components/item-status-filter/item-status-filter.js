import React from 'react';
import './item-status-filter.scss';

const ItemStatusFilter = (props) => {

    const buttons = [
    {name: "all", label: "All"},
    {name: "active", label: "Pending"},
    {name: "done", label: "Done"}
  ];
  
  return (
    <div className="btn-group">
      {
        buttons.map(btn => {
          const isActive = props.filter === btn.name;
          const btnClass = isActive ? "btn btn-info" : "btn btn-outline-secondary";
          return(
            <button key={btn.name} type="button" id={btn.name}
            className={btnClass} onClick={(e) => {props.onSwitch(e.target.id)}}>{btn.label}</button>
          )
        })
      }
    </div>
  );
};

export default ItemStatusFilter;