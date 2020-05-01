import React from 'react';
import Loader from '../../components/Loader/Loader'
import SearchField from '../../components/SearchField/SearchField'
import Serie from './Series.component'

class Series extends React.Component {
    constructor() {
        super();
        this.state = {
            series: [],
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
                    loading: false,
                    series: data.entries.filter((data, index) => data.programType !== 'movie' && index <= 21),
                })
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
        const { series, searchField } = this.state;
        const filteredSeries = series.filter(serie =>
            serie.title.toLowerCase().includes(searchField.toLocaleLowerCase()))
        console.log(filteredSeries)
        if (this.state.loading) {
            return (
                <Loader />
            )
        } else {
            if (!this.state.err) {
                return (
                    <>
                        <SearchField handleChange={this.handleChange} type='serie' />
                        <div className='imagesTemplate'>
                            {filteredSeries.map((serie, index) =>
                                serie.releaseYear >= 2010 && index <= 21 ?
                                    <Serie key={index} serie={serie} /> : null
                            )}

                        </div>
                    </>
                );
            } else {
                return (
                    <div>
                        Opss... Something went wrong
                    </div>
                )
            }
        }
    }
}

export default Series;