import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import Series from './Series/Series';
import Movies from './Movies/Movies';
import Header from '../components/Header/Header'

const Container = () => (
    <Switch>
        <Route exact path='/' component={Home} name='home' />
        <Route path='/series' component={Series} />
        <Route path='/movies' component={Movies} />
    </Switch>
)


export default Container;