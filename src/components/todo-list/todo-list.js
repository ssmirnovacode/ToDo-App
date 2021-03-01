import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({items}) => {
    return(
        <ul className="list-group todo-list">
            {
                items.map(item => {

                    const {id, ...itemProps} = item;
                    return(
                        <li className="list-group-item" key={item.id}><TodoListItem {...itemProps} /></li> //{...item} взяли все ключи item и записали их в одноименные атрибуты
                    )
                })
            }
        </ul>
    );
};

export default TodoList;