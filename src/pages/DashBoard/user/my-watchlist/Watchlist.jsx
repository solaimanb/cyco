import React from "react";
import WatchListCard from "./WatchListCard";

import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../../../store/wishListSlice/wishListSlice";

const WatchList = () => {
  const wishlist = useSelector((state) => state.wishlist);
  console.log(wishlist);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (movie) => {
    dispatch(removeFromWishlist(movie));
  };

  return (
    <>
      <div>
        <h2>Wishlist</h2>
        <ul>
          {Array.isArray(wishlist) && wishlist.length > 0 ? (
            wishlist.map((movie) => (
              <WatchListCard key={movie.id}>
                {movie.title}{" "}
                <button onClick={() => handleRemoveFromWishlist(movie)}>
                  Remove
                </button>
              </WatchListCard>
            ))
          ) : (
            <p>Your wishlist is empty.</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default WatchList;
