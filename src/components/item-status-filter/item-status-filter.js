import React, {Component} from 'react';
import './item-status-filter.css';

class ItemStatusFilter extends Component {
  
  toggleActiveClass = (e) => {
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

    const {onSwitch} = this.props;

    return (
      <div className="btn-group">
        <button type="button" id="all"
                className="btn btn-info" onClick={(e) => {onSwitch(e.target.id); this.toggleActiveClass(e)}}>All</button>
        <button type="button" id="active"
                className="btn btn-outline-secondary" onClick={(e) => {onSwitch(e.target.id); this.toggleActiveClass(e)}}>Active</button>
        <button type="button" id="done"
                className="btn btn-outline-secondary" onClick={(e) => {onSwitch(e.target.id); this.toggleActiveClass(e)}}>Done</button>
      </div>
    );
  }
};

export default ItemStatusFilter;