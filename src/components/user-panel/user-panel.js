import React from 'react';
import './user-panel.scss';

const UserPanel = (props) => {

    const {name, handleLogOut} = props;
    
    return(
        <div className="user-panel d-flex">
            <div className="greeting mr-2">Hello, {name || 'Guest'}</div> 
            <button className="btn btn-outline-secondary logout" onClick={handleLogOut}>Log out</button>            
        </div>
    )
}

export default UserPanel;