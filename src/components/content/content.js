import React from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import TodoList from '../todo-list/todo-list';
import ItemAddForm from '../item-add-form/item-add-form';
import LoginForm from '../login/login';
import RegisterForm from '../register/register';

const Content = props => {

    const{ loggedIn, pendingCount, doneCount, pattern, searchItems, filter, onSwitchFilter, dark, visibleItems, 
        deleteItem, toggleDone, toggleImportant, addItem, signInType, setSignInType, guestUserSignIn} = props;

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
                        <LoginForm />
                        <div className="descr mt-2">If you are not registered yet, you can sign up <span className="login-span" 
                            onClick={() => setSignInType('register')}>here</span></div>
                        <div className="descr mt-2">You can also sign-in as a <span className="login-span"
                            onClick={guestUserSignIn}>guest </span>
                            (your data will be public)</div>
                        </>
                        : 
                        <>
                        <RegisterForm onRegister={() => setSignInType('login')} />
                        <div className="descr mt-2">Already registered? Please  <span className="login-span" 
                            onClick={() => setSignInType('login')}>log in</span></div>
                            <div className="descr mt-2">For demo purposes email verification has been disabled.<br/> 
                            You can register with an imaginary email (for example, test@test.com)</div>
                        </>
                    } 
                </>
            }
        </>
    )
}

export default Content;