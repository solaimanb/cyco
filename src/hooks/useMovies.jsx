import { useQuery } from '@tanstack/react-query';

const useMovies = () => {
  const {
    data: movies = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ['movies'],
    queryFn: async () => {
      const res = await fetch('MoviesWithDetails.json');
      const data = await res.json();
      return data;
    },
  });
  return [movies, loading, refetch];
};

export default useMovies;