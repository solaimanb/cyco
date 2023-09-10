import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../../providers/AuthProvider';
import WishCard from './WishCard';

const Wishlist = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);
  console.log( wishlist );

  // if (loading) {
  //   return <Loading />;
  // }

  useEffect(() => {
    if (user) {
      axiosSecure
        .get(`/user/${user?.email}`)
        .then( ( response ) => {
          console.log(response);
          setWishlist(response?.data?.wishlist);
        })
        .catch((error) => {
          console.error('Error fetching wishlist:', error);
        });
    }
  }, [user, axiosSecure]);

  // REMOVE FROM WISHLIST:
  const handleRemoveFromWishlist = async (movieId) => {
    try {
      if (user) {
        const response = await Swal.fire({
          text: 'Want to delete from wishlist?',
          icon: 'warning',
          background: '#222',
          showCancelButton: true,
          confirmButtonText: 'Remove',
          cancelButtonText: 'Cancel',
        });

        if (response.isConfirmed) {
          const response = await axiosSecure.delete(
            `/wishlist/${user?.email}/${movieId}`
          );

          if (response?.status === 200) {
            setWishlist((prevWishlist) =>
              prevWishlist?.filter((movie) => movie?._id !== movieId)
            );

            Swal.fire({
              text: 'The movie has been removed from your wishlist!',
              icon: 'success',
              background: '#222',
            });
          } else {
            console.log(
              'Error removing movie from wishlist:',
              response?.data?.error
            );
          }
        }
      }
    } catch (error) {
      console.log('Error removing movie from wishlist', error);
    }
  };

  return (
    <section className="min-h-screen p-2 md:p-3 mt-3 lg:mt-0 backdrop-blur-sm bg-zinc-950">
      <p className="hidden md:flex text-sm md:text-base font-semibold border-l-4 border-cyred ml-2 px-2 md:px-5">
        My wishlist
      </p>

      {wishlist && wishlist?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
          {wishlist?.map((movie) => (
            <WishCard
              key={movie?._id}
              movie={movie}
              onRemove={() => handleRemoveFromWishlist(movie?._id)}
            />
          ))}
        </div>
      ) : (
        <p className="text-2xl text-center">No movies in your wishlist.</p>
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
    </section>
  );
};

export default Wishlist;
