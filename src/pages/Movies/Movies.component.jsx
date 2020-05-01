import React from 'react';

const Movie = props => (
    <div className='cardsComponents'>
        <div className='cardsComponents'>
            <img className='imgs' src={props.movie.images.PosterArt.url} alt="" />
            <p>{props.movie.title}</p>
        </div>
    </div>
);

export default Movie;