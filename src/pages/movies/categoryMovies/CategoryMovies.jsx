import React from "react";
import useMovies from "../../../hooks/useMovies";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchData } from "../../../store/slices/paymenthistorySlice/paymentHistorySlice";
import useAuth from "../../../hooks/useAuth";

const CategoryMovies = () => {
  const [movies] = useMovies();
  const { user, setLoading } = useAuth();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.paymentHistory.data);

  const filter = data && data.find((d) => d?.email === user?.email);
  const [firstElement, setFirstElement] = useState();

  useEffect(() => {
    dispatch(fetchData());
    //  movies.map(movie=>setMovieArray(movie))
    // Simulating setting the filter array
    if (filter?.membership == "2-Year") {
      setFirstElement("Watch now");
    } else if (filter?.membership == "1-Year") {
      setFirstElement("Watch now");
    } else if (filter?.membership == "6-Months") {
      setFirstElement("Watch now");
    } else if (filter?.membership == "1-Months") {
      setFirstElement("Watch now");
    } 
    // else{
    // //   setMovieNoSubscriptions('Subscriptions Now')
    // // }
  }, [dispatch, movies]);

  useEffect(() => {}, []);

  return firstElement;
};

export default CategoryMovies;
