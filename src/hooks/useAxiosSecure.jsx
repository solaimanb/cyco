import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

// const axiosSecure = axios.create({
//   // baseURL: `${import.meta.env.VITE_SERVER_URL}`,
//   baseURL: 'https://cyco-server.vercel.app',
// });

const useAxiosSecure = (useLocal = true) => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const baseURL = useLocal
    ? `${import.meta.env.VITE_SERVER_URL}`
    : 'https://cyco-server.vercel.app';

  const axiosSecure = axios.create({
    baseURL,
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;
