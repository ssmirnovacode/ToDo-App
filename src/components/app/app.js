import React, {useEffect, useState} from 'react';
import './app.scss';
import firebase, { db } from '../../firebase.config';
import Footer from '../footer/footer';
import { firebaseLooper } from '../../utils/tools';
import UserPanel from '../user-panel/user-panel';
import Content from '../content/content';

const App = () => {

    let user = firebase.auth().currentUser || null;

    //==============State hooks====================================================

    const [items, setItems] = useState([]);
     
    const [pattern, setPattern] = useState(''); //search query

    const [filter, setFilter] = useState('all');

    const [loggedIn, setLoggedIn] = useState(false);

    const [dark, setDark] = useState(false);

    const [signInType, setSignInType] = useState('login');

    const [confirmEmailSent, setConfirmEmailSent] = useState(false);

    useEffect( () => {
        db.collection('items').get().then(snapshot => {
            const todos = firebaseLooper(snapshot);
            setItems(todos);
        })
        .catch( err => console.error(err.message));
    }, []);

    //====Firebase tools====================================

    firebase.auth().onAuthStateChanged( userObj => {
        if (userObj && signInType === 'login' && firebase.auth().currentUser.emailVerified) {
            user = firebase.auth().currentUser;
            //confirmEmailSent && setConfirmEmailSent(false);
            setLoggedIn(true);
            //console.log(user);
            //console.log(`${user.displayName} logged in`);
        }
        else {
            setLoggedIn(false);
            //console.log('No authorized users online');
        }
    });

    const guestUserSignIn = () => {
        firebase.auth().signInWithEmailAndPassword('guest@test.com', 'test123')
        .then( () => {
            setLoggedIn(true);
            //console.log(user);
        })
        .catch(err => console.error(err.message));
    }

    //==============Methods ====================================================

    const createNewItem = (label) => {
        return {
            label,
            important: false,
            done: false,
            owner: user.uid,
            id: (Math.random()*100000000).toString()
        }
    };

    const addItem = async (label) => { 
        const newItem = createNewItem(label);
        await db.collection('items').doc(newItem.id).set(newItem);
        setItems(items => ([...items, newItem]));
    };

    const deleteItem = async id => { 
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

    const handleLogOut = async () => {
        await firebase.auth().signOut();
    }

    const toggleDark = () => {
        dark ? setDark(false) : setDark(true);
    };

    // ===== Rendering options ===============
    const visibleItems = items && items.filter(item => user && item.owner === user.uid)
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

    const contentProps = {
        loggedIn, pendingCount, doneCount, pattern, searchItems, filter, onSwitchFilter, dark, visibleItems, 
        deleteItem, toggleDone, toggleImportant, addItem, signInType, setSignInType, guestUserSignIn, confirmEmailSent, setConfirmEmailSent
    }

    return(
        <div className={dark ? "todo-app darkmode" : "todo-app"}>
            {loggedIn && <UserPanel name={user.displayName} handleLogOut={handleLogOut} /> }
            <div className="dark-toggle custom-control custom-switch mt-3 mb-2">
                <label className="custom-control-label" htmlFor="customSwitch1">Dark mode</label>
                <input type="checkbox" className="custom-control-input" id="customSwitch1" 
                    value={dark} onChange={toggleDark}/>
            </div>
            <Content {...contentProps} />
            <Footer darkmode={dark} />
        </div>
    )    
}

export default App;