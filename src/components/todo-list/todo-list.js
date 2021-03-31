import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.scss';

const TodoList = ({items, onDelete, onToggleDone, onToggleImportant, darkmode}) => {

    return(
        <ul className="list-group todo-list">
            {
                items.map(item => {

                    const {id, ...itemProps} = item;
                    return(
                        <li className={darkmode ? "list-group-item darkmode" : "list-group-item"} key={id}>
                            <TodoListItem {...itemProps} onDelete={() => onDelete(item)}
                                onToggleImportant= {() => onToggleImportant(id)}
                                onToggleDone= {() => onToggleDone(id)}
                                darkmode={darkmode}/>
                            </li> //{...item} взяли все ключи item и записали их в одноименные атрибуты
                    )
                })
            }
        </ul>
    );
};

export default TodoList;