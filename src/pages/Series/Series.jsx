import React from 'react';
import Loader from '../../components/Loader/Loader'

class Series extends React.Component {
    constructor() {
        super();
        this.state = {
            series: [],
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
                        loading: false,
                        series:  data.entries.filter((data, index) => data.programType !== 'movie' && index <= 21),
                    })
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
        }else{
        if(!this.state.err){
        return (
            <div className='imagesTemplate'>
                {this.state.series.map(serie => 
                serie.releaseYear >= 2010 ?
                    <div className='cardsComponents'>
                    <img className='imgs' src={serie.images.PosterArt.url}alt=""/>
                    <p>{serie.title}</p>
                    </div>
                    : null)
                    }
            </div>
        );
    }else{
        return(
            <div>
                Opss... Something went wrong
            </div>
        )
    }
}
    }
}

export default Series;