// useUsers.js
import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
  const {
    data: users = [],
    isLoading: loading,
    refetch,
    isError,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/users`);
        if (!res.ok) {
          throw new Error('Network response failed!');
        }
        const data = await res.json();

        if (!data) {
          return [];
        }

        return data;
      } catch (error) {
        console.error('Error fetching users', error);
        throw error;
      }
    },
  });
  return [users, loading, refetch, isError];
};

export default useUsers;
