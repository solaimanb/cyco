import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../../../../store/slices/wishListSlice/wishListSlice';
import WatchListCard from './WishCard';

const WishList = () => {
  const wishlist = useSelector( ( state ) => state );
  console.log(wishlist);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = React.useState(1);
  // const [currentPage, setCurrentPage] = useState(1);

  const handleRemoveFromWishlist = (movie) => {
    dispatch(removeFromWishlist(movie));
  };

  const itemsPerPage = 8;
  const totalPages = Math.ceil(wishlist.length / itemsPerPage);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the wishlist array to get the movies for the current page
  const moviesForCurrentPage = wishlist.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container h-screen mx-auto mt-4">
      <h2 className="text-xl font-semibold mb-4">My Wishlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {moviesForCurrentPage.map((movie) => (
          <WatchListCard
            key={movie.id}
            movie={movie}
            onRemove={() => handleRemoveFromWishlist(movie)}
          />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={`mx-2 px-2 py-1 rounded ${
              currentPage === index + 1
                ? 'bg-cyred text-white'
                : 'bg-white text-cyred hover:bg-gray-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
  //   return (
  //     // <div className="container mx-auto mt-4">
  //     //   <h2 className="text-2xl font-semibold mb-4">My Wishlist</h2>
  //     //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  //     //     {/* {moviesForCurrentPage.map((movie) => (
  //     //       <WatchListCard
  //     //         key={movie.id}
  //     //         movie={movie}
  //     //         onRemove={() => handleRemoveFromWishlist(movie)}
  //     //       /> */}
  //     //     {/* ))} */}
  //     //   </div>

  //     //   <div className="flex justify-center mt-4">
  //     //     {Array.from({ length: totalPages }, (_, index) => (
  //     //       {/* <button
  //     //         key={index + 1}
  //     //         onClick={() => goToPage(index + 1)}
  //     //         className={`mx-2 px-2 py-1 rounded ${
  //     //           currentPage === index + 1
  //     //             ? "bg-cyred text-white"
  //     //             : "bg-white text-cyred hover:bg-gray-200"
  //     //         }`}
  //     //       >
  //     //         {index + 1}
  //     //       </button> */}
  //     //     ))}
  //     //   </div>
  //     // </div>
  //   );
};

export default WishList;
