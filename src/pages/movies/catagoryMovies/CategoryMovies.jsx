import React from 'react';
import useMovies from '../../../hooks/useMovies';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchData } from '../../../store/slices/paymenthistorySlice/paymentHistorySlice';
import useAuth from '../../../hooks/useAuth';


const CategoryMovies = () => {
    const [movies] = useMovies()
    const { user, setLoading } = useAuth();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.paymentHistory.data);
    //  const [isFirstElement, setFirstElement] = useState();
    console.log(data);
    useEffect(() => {
      dispatch(fetchData());
    }, [dispatch]);
    const filter = data && data.find((d) => d?.email === user?.email);
    console.log(filter);
    const [firstElement, setFirstElement] = useState();
    
    console.log(firstElement);
    useEffect(() => {
      // Simulating setting the filter array
    if (filter?.membership == 'Standard') {
      setFirstElement(movies)
    }
    else if (filter?.membership == 'Premium') {
      setFirstElement(movies)
    }
    else if (filter?.membership == 'ultraPremium') {
      setFirstElement(movies)
    }
    else if (filter?.membership == 'ultra') {
      setFirstElement(movies)
    }
    else {
      setFirstElement('Subscription Now')
    }
  
    }, []);
  
  
    console.log(movies);
    return firstElement;
};

export default CategoryMovies;