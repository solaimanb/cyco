import { useQuery } from '@tanstack/react-query';

const useHistory = () => {
  const {
    data: history = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ['history'],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/getHistoryData`);
      const data = await res.json();
      return data;
    },
  });
  return [history, loading, refetch];
};

export default useHistory;