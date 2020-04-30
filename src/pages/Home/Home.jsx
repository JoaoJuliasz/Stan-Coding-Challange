import React from 'react';

import { Link } from 'react-router-dom';

import PlaceHolder from '../../assets/placeholder.png';
import './Home.css'

class Home extends React.Component {
    
    render() {
        return (
            <div className='home-container'>
                <Link to='/movies'>
                    <div className='cards'>
                        <h1>Movies</h1>
                        <img src={PlaceHolder} alt=''/>
                    </div>
                </Link>
                <Link to='/series'>
                    <div className='cards'>
                        <h1>Series</h1>
                        <img src={PlaceHolder} alt=''/>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Home;