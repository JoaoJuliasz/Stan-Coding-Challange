import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = props => {
    let location = useLocation()
console.log(location);
return (    
    <div>
        <div className='top-header'>
           <Link to='/' style={{color: '#000'}}><h3>DEMO Streaming</h3></Link> 
            <div style={{ display: 'flex' }}>
                <a>Log in</a>
                <a>Start your free trial</a>
            </div>
        </div>
        <div className='bottom-header'>
            {(() => {
                if(location.pathname == '/'){
                    return <h4>Popular Titles</h4>
                }else if(location.pathname == '/movies'){
                   return <h4>Popular Movies</h4>
                }else { 
                   return <h4>Popular Series</h4>
                }
            })()}
        </div>
    </div>
);
}
export default Header;