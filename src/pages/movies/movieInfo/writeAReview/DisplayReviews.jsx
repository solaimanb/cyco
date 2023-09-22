import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import ReviewCard from './ReviewCard/ReviewCard';

const DisplayReviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(3); 
  const { user, loading, setLoading } = useAuth();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/movieReviews`)
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
        <nav className="py-8">
          <ul className="flex justify-center space-x-2">
            <li>
              <button
                className={`bg-gray-800 px-2 py-1 rounded ${
                  currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
                }`}
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Prev
              </button>
            </li>
            {Array.from({ length: Math.ceil(movieReviews.length / reviewsPerPage) }).map((_, index) => (
              <li key={index}>
                <button
                  className={`bg-red-500 text-white px-2 py-1 rounded ${
                    currentPage === index + 1 ? 'bg-red-700' : ''
                  }`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                className={`bg-gray-800 px-2 py-1 rounded ${
                  currentPage === Math.ceil(movieReviews.length / reviewsPerPage)
                    ? 'cursor-not-allowed'
                    : 'cursor-pointer'
                }`}
                onClick={() => paginate(currentPage + 1)}
                disabled={
                  currentPage === Math.ceil(movieReviews.length / reviewsPerPage)
                }
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default DisplayReviews;
