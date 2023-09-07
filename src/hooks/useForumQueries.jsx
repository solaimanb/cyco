import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useForumQueries = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    data: queries = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ['forumQueries'],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get('/forumQueries');
        // console.log(res);
        if (res.status !== 200) {
          throw new Error('Failed to fetch data');
        }
        return res.data;
      } catch (error) {
        throw error;
      }
    },
  });
  return [queries, loading, refetch];
};

export default useForumQueries;
