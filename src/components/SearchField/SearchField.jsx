import React from 'react';

const SearchField = props => (
    <div style={{ textAlign: 'center' }}>
        <input type="search" onChange={props.handleChange} placeholder={'Find your ' + props.type} />
    </div>
);

export default SearchField;