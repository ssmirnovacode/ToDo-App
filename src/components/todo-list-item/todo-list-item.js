import React from 'react';
import './todo-list-item.css';

const TodoListItem = (props) => {
 
    const {label, onDelete, onToggleDone, onToggleImportant, important, done} = props;
    
    let itemClass = 'todo-list-item';
    
    if (done) {
      itemClass += ' done'
    }
    if (important) {
      itemClass += ' important'
    }

    const btnClass = important ? "btn btn-outline-danger btn-sm float-right mr-2 active" : "btn btn-outline-danger btn-sm float-right mr-2";
  
    return (
      <span className={itemClass}>
        <span
          className="todo-list-item-label"
          onClick={onToggleDone}>
          {label}
        </span>

        <button type="button"
                className="btn btn-outline-secondary btn-sm float-right"
                onClick={onDelete}>
          <i className="fa fa-trash-o" />
        </button>
  
        <button type="button"
                className={btnClass}
                onClick={onToggleImportant} >
          <i className="fa fa-exclamation" />
        </button>
      
      </span>
    );  
};

export default TodoListItem;