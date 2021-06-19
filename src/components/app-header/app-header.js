import React from 'react';
import '../../scss/components/app-header.scss';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="app-header d-flex">
      <h1>ToDo List</h1>
      <h2>{done} done, {toDo} pending</h2>
    </div>
  );
};

export default AppHeader;