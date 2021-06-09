import React, {useEffect, useState} from 'react';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import AppHeader from '../app-header/app-header';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';
import './app.scss';
import UsernameForm from '../username/username';
import { db } from '../../firebase.config';
import Footer from '../footer/footer';
import { firebaseLooper } from '../../utils/tools';

const App = () => {

    const user = localStorage.getItem('user') || '';

    //==============State hooks====================================================

    const [items, setItems] = useState([]);
     
    const [pattern, setPattern] = useState(''); //search query

    const [filter, setFilter] = useState('all');

    const [loggedIn, setLoggedIn] = useState(false);

    const [dark, setDark] = useState(false);

    useEffect( () => {
        //localStorage.clear();
        db.collection('items').get().then(snapshot => {
            const todos = firebaseLooper(snapshot);
            setItems(todos);
            console.log('useEffect ran');
        })
        .catch( err => console.error(err.message));

    }, []);

    //==============Methods ====================================================

    const createNewItem = (label) => {
        return {
            label,
            important: false,
            done: false,
            owner: localStorage.getItem('user'),
            id: (Math.random()*100000000).toString()
        }
    };

    const addItem = async (label) => { 
        const newItem = createNewItem(label);
        await db.collection('items').doc(newItem.id).set(newItem);
        setItems(items => ([...items, newItem]));
    };

    const deleteItem = async id => { // pending method
        if (window.confirm('Are you sure you want to delete this item?')) {
            await db.doc(`items/${id}`).delete();
            const idX = items.findIndex(item => item.id === id);
            const newArray = [...items.slice(0,idX), ...items.slice(idX + 1)];
            setItems(newArray);
        }      
    };

    const toggleStatus = async (array, id, statusName) => { 
            const oldItem = array.find(item => item.id === id);
            
            await db.doc(`items/${id}`).update({
                [statusName]: !oldItem[statusName]
                }, error => {
                    throw new Error(error);
                    }
                );
            const idX = array.findIndex(item => item.id === id);
            const newItem = {
                ...items[idX],
                [statusName]: !oldItem[statusName]
            };
            const newArray = [...items.slice(0, idX), newItem, ...items.slice(idX + 1)];
            setItems(newArray);    
    };

    const toggleDone = id => {  
        toggleStatus(items, id, 'done');
    };

    const toggleImportant = id => { 
        toggleStatus(items, id, 'important');
    };

    const searchItems = (value) => { 
        setPattern(value);
    };

    const onSwitchFilter = (filterName) => { 
        setFilter(filterName);
    }

    const handleLogin = (username) => {
        localStorage.setItem('user', username);
        setLoggedIn(true);
    }

    const toggleDark = () => {
        dark ? setDark(false) : setDark(true);
    };

    // ===== Rendering options ===============
    const visibleItems = items && items.filter(item => item.owner === user)
                                .filter(item => item.label.toLowerCase().indexOf(pattern.toLowerCase()) > -1)
                                .filter(item => {
                                    if (filter === 'done') {
                                        return item.done === true
                                    }
                                    else if (filter === 'active') {
                                        return item.done === false
                                    }
                                    else return item
                                });

    const userItems = items.filter(item => item.owner === user);
    const doneCount = userItems.filter(el => el.done === true).length;
    const pendingCount = userItems.length - doneCount;

    // ===== User panel viewed after login ===============
    const userPanel = loggedIn ? 
         <>
            <div className="user-panel d-flex">
                <div className="greeting mr-2">Hello, {user}</div> 
                <button className="btn btn-outline-secondary logout" onClick={() => setLoggedIn(false)}>Log out</button>            
            </div>
            
        </>
        : null;

    // ===== Todo list view based on if logged in or not ===============
    const list = loggedIn ? 
        <>
            <AppHeader toDo={pendingCount} done={doneCount} />
            <div className="top-panel d-flex">
                <SearchPanel value={pattern} onSearch={searchItems}/>
                <ItemStatusFilter filter={filter} onSwitch={onSwitchFilter}/>
            </div>
            <TodoList darkmode={dark} items={visibleItems} onDelete={ deleteItem} 
                onToggleDone={toggleDone} onToggleImportant={toggleImportant}/>
            <ItemAddForm onAdd={addItem}/> 
        </> 
        : 
        <>
            <h1>ToDo List</h1>
            <UsernameForm onLogin={handleLogin}/>
            <div className="descr mt-2">Please log in. No password required.<br/>To create a new user just type your username. 
                <br/><span>Please note that our todo items will be available to anyone who logs in with your username</span></div>
        </>

    // ===== Styling ===============
    return(
        <div className={dark ? "todo-app darkmode" : "todo-app"}>
            {userPanel}
            <div className="dark-toggle custom-control custom-switch mt-3 mb-2">
                <label className="custom-control-label" htmlFor="customSwitch1">Dark mode</label>
                <input type="checkbox" className="custom-control-input" id="customSwitch1" 
                    value={dark} onChange={toggleDark}/>
            </div>
            {list}
            <Footer darkmode={dark} />
        </div>
    )    
}

export default App;