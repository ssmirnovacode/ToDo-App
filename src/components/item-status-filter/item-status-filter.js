import React, {Component} from 'react';
import './item-status-filter.css';

class ItemStatusFilter extends Component {
  
  toggleFilter = (e) => {
    this.props.onSwitch(e.target.id);

    document.querySelector('.btn-info').classList.add('btn-outline-secondary');
    document.querySelector('.btn-info').classList.remove('btn-info');
    
     if (e.target.className.indexOf('btn-info') > -1) {
       return;
     }
     else {
       e.target.className = 'btn btn-info'
     }
  }
  render() {
    
    return (
      <div className="btn-group">
        <button type="button" id="all"
                className="btn btn-info" onClick={(e) => {this.toggleFilter(e)}}>All</button>
        <button type="button" id="active"
                className="btn btn-outline-secondary" onClick={(e) => {this.toggleFilter(e)}}>Pending</button>
        <button type="button" id="done"
                className="btn btn-outline-secondary" onClick={(e) => {this.toggleFilter(e)}}>Done</button>
      </div>
    );
  }
};

export default ItemStatusFilter;