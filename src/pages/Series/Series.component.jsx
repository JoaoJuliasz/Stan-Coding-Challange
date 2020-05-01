import React from 'react';

const Serie = props => (
    <div className='cardsComponents'>
                <div className='cardsComponents'>
                    <img className='imgs' src={props.serie.images.PosterArt.url} alt="" />
                    <p>{props.serie.title}</p>
                </div>
    </div>
);

export default Serie;