import React, {Component} from 'react';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import AppHeader from '../app-header/app-header';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';
import './app.css';

class App extends Component {

    state = {
        items: [
            this.createNewItem('Have coffee'),
            this.createNewItem('Eat lunch'),
            this.createNewItem('Code')
         ]
    };

    createNewItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: Math.random()
        }
    }

    deleteItem = id => {
        this.setState( ({items}) => {
            const idx = items.findIndex( el => el.id === id);
            const updatedItems = [...items.slice(0, idx), ...items.slice(idx+1)];
            return {
                items: updatedItems
            }
        });
    };

    addItem = (label) => {
        const newItem = this.createNewItem(label);
        this.setState( ({items}) => {
            return {
                items: [...items, newItem]
            }
        });
    };

    //to be refactored as toggleStatus(id, statusName)
    

    //to be refactored as toggleStatus(array, id, statusName)
    toggleStatus = (array, id, statusName) => {
            const idx = array.findIndex( el => el.id === id);
            const oldItem = array[idx];
            const updatedItem = {...oldItem, [statusName]: !oldItem[statusName]}; // superficial copy of oldItem and updated property
            
            return [
                ...array.slice(0, idx),
                updatedItem,
                ...array.slice(idx+1)
            ]; 
    }

    toggleDone = id => {
        this.setState( ({items}) => ({
            items: this.toggleStatus(items, id, 'done')
        }));
    }

    toggleImportant = id => {
        this.setState( ({items}) => ({
            items: this.toggleStatus(items, id, 'important')
        }));
    }

    render() {
        const {items} = this.state;
        const doneCount = items.filter(el => el.done === true).length;
        const pendingCount = items.length - doneCount;
        
        return(
            <div className="todo-app">
                <AppHeader toDo={pendingCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList items={items} onDelete={this.deleteItem} 
                    onToggleDone={this.toggleDone} onToggleImportant={this.toggleImportant}/>
                <ItemAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;