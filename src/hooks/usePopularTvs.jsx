import { useQuery } from '@tanstack/react-query';

const usePopularTvs = () => {
  const {
    data: popularTvs = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ['popularTvs'],
    queryFn: async () => {
      const res = await fetch('tvData.json');
      const data = await res.json();
      return data;
    },
  });
  return [popularTvs, loading, refetch];
};

export default usePopularTvs;