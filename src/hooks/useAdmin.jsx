import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery(
        ['isAdmin', user?.email],
        async () => {
            try {
                const res = await axiosSecure.get(`/users/admin/${user?.email}`);
                return res.data.admin;
            } catch (error) {
                // Handle the error gracefully, e.g., set isAdmin to false
                return false;
            }
        },
        {
            enabled: !loading,
            defaultValue: false, // Default value when loading or error occurs
        }
    );

    return [isAdmin, isAdminLoading];
};

export default useAdmin;
