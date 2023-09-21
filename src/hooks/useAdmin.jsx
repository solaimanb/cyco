import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery(
        ['isAdmin', user?.email],
        async () => {
          const res = await axiosSecure.get(`/users/admin/${user?.email}`);
          return res.data.admin;
        },
        {
          enabled: !loading,
        }
      );
    return [ isAdmin, isAdminLoading];
};

export default useAdmin;