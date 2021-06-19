import React from 'react';
import '../../scss/components/search-panel.scss';

const SearchPanel = ({value, onSearch}) => {
    return <input className="form-control search-input" placeholder="Search" 
    onChange={(e) => onSearch(e.target.value)}
    value={value}/>
};

export default SearchPanel;