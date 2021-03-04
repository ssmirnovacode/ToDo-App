import React, {useEffect, useState} from 'react';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import AppHeader from '../app-header/app-header';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';
import './app.scss';
import baseURL from '../../assets/baseURL';
import RequestService from '../../services/requests';

const App = () => {

    const reqService = new RequestService();

    const createNewItem = (label) => {
        return {
            label,
            important: false,
            done: false,
            id: Math.random()
        }
    };

    const [items, setItems] = useState([]);

    useEffect( () => {
        reqService.getItems(baseURL + 'items')
        .then( res => {setItems(res); console.log(res)})
        .catch(e => console.log('GET error!'))
    }, [JSON.stringify(items)])

    const [pattern, setPattern] = useState('');

    const [filter, setFilter] = useState('all');

    const deleteItem = id => { // pending DELETE req
        setItems( (items) => {
            const idx = items.findIndex( el => el.id === id);
            return [...items.slice(0, idx), ...items.slice(idx+1)];         
        });
    };

    const addItem = (label) => { 
        const newItem = createNewItem(label);
        reqService.postItem(baseURL + 'items', newItem)
        .then(res => console.log(res))
        .catch(e => console.log('POST error'));
        /* setItems( (items) => {
            return [...items, newItem]
        }); */
    };

    const toggleStatus = (array, id, statusName) => {
            const idx = array.findIndex( el => el.id === id);
            const oldItem = array[idx];
            const updatedItem = {...oldItem, [statusName]: !oldItem[statusName]}; // superficial copy of oldItem and updated property
            
            return [
                ...array.slice(0, idx),
                updatedItem,
                ...array.slice(idx+1)
            ]; 
    };

    const toggleDone = id => {  
        setItems( (items) => {
            return toggleStatus(items, id, 'done')
        });
    };

    const toggleImportant = id => { 
        setItems( (items) => {
            return toggleStatus(items, id, 'important')
        });
    };

    const searchItems = (value) => { 
        setPattern(value);
    };

    const onSwitchFilter = (filterName) => { 
        setFilter(filterName);
    }

    const doneCount = items.filter(el => el.done === true).length;
    const pendingCount = items.length - doneCount;
    const visibleItems = items.filter(item => item.label.toLowerCase().indexOf(pattern.toLowerCase()) > -1)
                            .filter(item => {
                                if (filter === 'done') {
                                    return item.done === true
                                }
                                else if (filter === 'active') {
                                    return item.done === false
                                }
                                else return item
                            });
    
    return(
        <div className="todo-app">
            <AppHeader toDo={pendingCount} done={doneCount} />
            <div className="top-panel d-flex">
                <SearchPanel value={pattern} onSearch={searchItems}/>
                <ItemStatusFilter filter={filter} onSwitch={onSwitchFilter}/>
            </div>
            <TodoList items={visibleItems} onDelete={deleteItem} 
                onToggleDone={toggleDone} onToggleImportant={toggleImportant}/>
            <ItemAddForm onAdd={addItem}/>
        </div>
    )
    
}

export default App;