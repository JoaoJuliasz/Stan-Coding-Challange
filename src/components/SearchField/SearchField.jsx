import React from 'react';

import './SearchField.css';

const SearchField = props => (
    <div className='search-field'>
        <input type="search"
            onChange={props.handleChange}
            placeholder={'Find your ' + props.type}
        />
    </div>
);
export default SearchField;