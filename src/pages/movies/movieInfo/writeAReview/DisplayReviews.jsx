import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import ReviewCard from './ReviewCard/ReviewCard';

const DisplayReviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(4); // Number of reviews to display per page
  const { user, loading, setLoading } = useAuth();


  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_SERVER_URL}/movieReviews`;
    axios
      .get(apiUrl)
      .then((response) => {
        const reviewsData = response.data;
        setMovieReviews(reviewsData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movie reviews:', error);
        setLoading(false);
      });
  }, []);

  // Calculate the index range of reviews to display on the current page
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = movieReviews.slice(
    indexOfFirstReview,
    indexOfLastReview
  );

  // Function to handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="movie-info-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="review-cards-container flex flex-wrap">
            {currentReviews.map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {/* <ul className="pagination flex gap-2 justify-center items-center">
          {Array.from({ length: Math.ceil(movieReviews.length / reviewsPerPage) }).map((_, index) => (
            <li key={index} className={`page-item ${index + 1 === currentPage ? "active" : ""}`}>
              <button className="page-link" onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul> */}
      </div>
    </>
  );
};

export default DisplayReviews;
