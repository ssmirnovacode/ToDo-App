import React from 'react';
import './content.scss';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import TodoList from '../todo-list/todo-list';
import ItemAddForm from '../item-add-form/item-add-form';
import LoginForm from '../login/login';
import RegisterForm from '../register/register';
//import firebase from '../../firebase.config';

const Content = props => {

    const{ loggedIn, pendingCount, doneCount, pattern, searchItems, filter, onSwitchFilter, dark, visibleItems, 
        deleteItem, toggleDone, toggleImportant, addItem, signInType, setSignInType, guestUserSignIn, 
        confirmEmailSent, setConfirmEmailSent} = props;

    return(
        <>
            {
                loggedIn ? 
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
                    {
                        signInType === 'login' ? 
                        <>
                        {
                            confirmEmailSent && /* !firebase.auth().currentUser.emailVerified && */ <div className="warning-span mb-3">Please check your email and confirm your registration.</div>
                        }
                        <LoginForm confirmEmailSent={confirmEmailSent}  setConfirmEmailSent={setConfirmEmailSent}/>
                        <div className="descr mt-2">If you are not registered yet, you can sign up <span className="login-span" 
                            onClick={() => setSignInType('register')}>here</span></div>
                        <div className="descr mt-2">You can also sign-in as a <span className="login-span"
                            onClick={guestUserSignIn}>guest </span>
                            (your data will be public)</div>
                        </>
                        : 
                        <>
                        <RegisterForm setConfirmEmailSent={setConfirmEmailSent} onRegister={() => setSignInType('login')} />
                        <div className="descr mt-2">Already registered? Please  <span className="login-span" 
                            onClick={() => setSignInType('login')}>log in</span></div>
                            <div className="descr mt-2">For demo purposes email verification has been disabled.
                            You can sign up with an imaginary email (for example, test@test.com). 
                            <span className="warning-span"> Please note that you won´t be able to recover your password in that case</span></div>
                        </>
                    } 
                </>
            }
        </>
    )
}

export default Content;