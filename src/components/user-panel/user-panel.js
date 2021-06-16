import React, {useState, useEffect} from 'react';
import './user-panel.scss';
import firebase from '../../firebase.config';

const UserPanel = (props) => {

    const [errMessage, setErrMessage] = useState('');

    const {name, handleLogOut} = props;

    const changeEmail = () => {
        if (firebase.auth().currentUser.uid !== 'pMzXQLXTikecjjABwy3vAnyipGC3') {
            const newEmail = prompt('Enter new email. You will have to sign in again with the email indicated.');
            newEmail && firebase.auth().currentUser.updateEmail(newEmail)
            .then( () => firebase.auth().signOut())
            .catch(err => console.error(err.message));
        } 
        else {
            setErrMessage('Guest users are not allowed to change email');
        }
    };

    const changePassword = () => {
        if (firebase.auth().currentUser.uid !== 'pMzXQLXTikecjjABwy3vAnyipGC3') {
            const newPassword = prompt('Enter new password. You will have to sign in again with new password.');
            newPassword && firebase.auth().currentUser.updatePassword(newPassword)
            .then( () => firebase.auth().signOut())
            .catch(err => setErrMessage(err.message));
        } 
        else {
            setErrMessage('Guest users are not allowed to change password');
        }
    };

    useEffect( () => {
        const timerId = setTimeout(() => setErrMessage(''), 2000);
        console.log('timeout set');
        return () => clearInterval(timerId);
    }, [errMessage]);
    
    return(
        <>
        <div className="user-panel message mb-2">{errMessage}</div>
        <div className="user-panel d-flex">
            <div className="greeting mr-2">Hello, {name || 'Guest'}</div> 
            <button className="btn btn-outline-secondary logout" onClick={changeEmail}>Update email</button>
            <button className="btn btn-outline-secondary logout" onClick={changePassword}>Update password</button>   
            <button className="btn btn-outline-secondary logout" onClick={handleLogOut}>Log out</button>             
        </div>
        </>
    )
}

export default UserPanel;