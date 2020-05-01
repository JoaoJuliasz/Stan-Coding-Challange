import React from 'react';

import Loader from '../../components/Loader/Loader'
import SearchField from '../../components/SearchField/SearchField'
import Movie from './Movies.component'

class Movies extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            err: false,
            loading: true,
            searchField: '',
        }
    }
    componentDidMount() {
        fetch('./setupTests.json', {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movies: data.entries.filter((data) => data.programType == 'movie'),
                    loading: false,
                },
                )
            })
            .catch(err => {
                this.setState({
                    err: true,
                })
            })
    }

    handleChange = event => {
        this.setState({
            searchField: event.target.value
        })
    }
    render() {
        const { movies } = this.state
        const filteredMovie = movies.filter(movie => 
            movie.title.toLowerCase().includes(this.state.searchField.toLocaleLowerCase())
        )
        console.warn(filteredMovie)
        if (this.state.loading) {
            return (
                <Loader />
            )
        } else {
            if (!this.state.err) {
                return (
                    <>
                    <SearchField handleChange={this.handleChange} type='movie'/>
                    <div className='imagesTemplate'>
                    {filteredMovie.map((movie, index) => 
                    movie.releaseYear >= 2010 && index <= 21 ?
                    <Movie movie={movie} index={index}/> : null
                    )}</div>
                    </>
                );
            } else {
                return (
                    <div>
                        Opss... Something went wrong
                    </div>
                );
            }
        }
    }
}

export default Movies;