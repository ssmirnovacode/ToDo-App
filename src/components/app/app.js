import React, {useEffect, useState} from 'react';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import AppHeader from '../app-header/app-header';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';
import './app.scss';
import baseURL from '../../assets/baseURL';
import RequestService from '../../services/requests';
import UsernameForm from '../username/username';
import db from '../../firebase.config';
import firebase from 'firebase';

const App = () => {

    const user = localStorage.getItem('user') || '';

    const reqService = new RequestService();

    var ref = firebase.database().ref();

/* ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
}); */

    //==============State hooks====================================================

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        ref.on("value", function(snapshot) {
            const data = Object.entries(snapshot.val());
            console.log(data);
            setItems(data);
         }, function (error) {
            console.log("Error: " + error.code);
         });

        /* const res = db.collection('items');
        console.log(res);
        const data=await res.get();
        console.log(data);
        return data; */
    }
     
    useEffect( () => {
        localStorage.clear();
        reqService.getItems()
        .then(res => res.docs.forEach(item=> {
            console.log([...items,item.data()]);
            setItems([...items,item.data()]);
           }))
        .catch(() => console.log('GET error!'));
        //return () => mounted = false;
    }, []);

    const [pattern, setPattern] = useState('');

    const [filter, setFilter] = useState('all');

    const [loggedIn, setLoggedIn] = useState(false);

    const [dark, setDark] = useState(false);

    //==============Methods ====================================================

    const createNewItem = (label) => {
        return {
            label,
            important: false,
            done: false,
            id: Math.random(),
            owner: localStorage.getItem('user')
        }
    };

    const deleteItem = id => { 
        if (window.confirm('Are you sure you want to delete this item?')) {
            reqService.deleteItem(baseURL + 'items/' + id)
            .then(() => {
                console.log(`Item deleted`); 
                const idx = items.findIndex( el => el.id === id);
                setItems([
                    ...items.slice(0, idx),
                    ...items.slice(idx+1)
                ])})  //add a message for user
            .catch(e => console.log('DELETE error!'));
        }      
    };

    const addItem = (label) => { 
        const newItem = createNewItem(label);
        reqService.postItem(baseURL + 'items', newItem)
        .then(() => setItems([...items, newItem]))
        .catch(() => console.log('POST error'));
    };

    const toggleStatus = (array, id, statusName) => { 
            const idx = array.findIndex( el => el.id === id);
            const oldItem = array[idx];
            const updatedItem = {...oldItem, [statusName]: !oldItem[statusName]}; // superficial copy of oldItem and updated property
            
            reqService.updateItem(baseURL + 'items/' + id, updatedItem)
            .then(() => setItems([
                ...array.slice(0, idx),
                updatedItem,
                ...array.slice(idx+1)
                ]))
            .catch(() => console.log('Status update error!'));        
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

    // ===== Rendering variables ===============
    const visibleItems = items.filter(item => item.owner === user)
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
            <TodoList darkmode={dark} items={visibleItems} onDelete={deleteItem} 
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
        </div>
    )    
}

export default App;