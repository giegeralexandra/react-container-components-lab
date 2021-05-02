// Code MovieReviews Here
import React from 'react';
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer';
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer'

const MovieReviews = ({reviews}) => {
    return <div className="review-list">
        {reviews.map(movieReview => <LatestMovieReviewsContainer review={movieReview}/>)}
    </div>
}


export default MovieReviews;