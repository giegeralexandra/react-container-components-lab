import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

    constructor(){
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleSubmit = () => {
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=&lt;search-term>')
        .then(res => res.json())
        .then(movieData => this.setState({reviews: movieData.reviews}))
    }

    render(){
        return <MovieReviews div className="searchable-movie-reviews" onSubmit={this.handleSubmit}/>
    }
}
