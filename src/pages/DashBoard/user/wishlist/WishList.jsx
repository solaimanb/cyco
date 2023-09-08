import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';



const Wishlist = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useContext(AuthContext)
  const [wishlist, setWishlist] = useState([]) || [];
  console.log(wishlist);
  // if(loading){
  //   return <Loading/>
  // }

  useEffect(() => {
    if (user) {
      axiosSecure
        .get(`/user/${user.email}`) // Replace with your API endpoint URL.
        .then((response) => {
          setWishlist(response.data.wishlist);
        })
        .catch((error) => {
          // Handle any errors here.
          console.error('Error fetching wishlist:', error);
        });
    }
  }, [user, axiosSecure]);
  

  return (
    <div className="container h-screen mx-auto mt-4">
      <h2 className="font-semibold mb-4">My Wishlist</h2>
      {wishlist && wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlist.map((movie) => (
            <WatchListCard
              key={movie.id}
              movie={movie}
              onRemove={() => handleRemoveFromWishlist(movie)}
            />
          ))}
        </div>
      ) : (
        <p className='text-2xl text-center'>No movies in your wishlist.</p>
      )}

      {/* <div className="flex justify-center mt-4">
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
      </div> */}
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

export default Wishlist;
