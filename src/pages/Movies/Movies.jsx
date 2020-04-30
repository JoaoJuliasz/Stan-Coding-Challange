import React from 'react';

import Loader from '../../components/Loader/Loader'

class Movies extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            err: false,
            loading: true,
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
    render() {
        if (this.state.loading) {
            return (
                <Loader />
            )
        } else {
            if (!this.state.err) {
                return (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', justifyItems: 'center' }}>
                        {this.state.movies.map((movie, index) =>
                            movie.releaseYear >= 2010 && index <= 21 ?
                                <div style={{ textAlign: 'center', paddingTop: '5px' }}>
                                    <img style={{ width: '200px' }} src={movie.images.PosterArt.url} alt="" />
                                    <p>{movie.title}</p>
                                </div>
                                : null
                        )
                        }
                    </div>
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