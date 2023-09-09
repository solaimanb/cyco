import { useQuery } from '@tanstack/react-query';

const useMovies = () => {
  const {
    data: movies = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ['movies'],
    queryFn: async () => {
      // const res = await fetch('MoviesWithDetails.json');
          const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/movies`);
      const data = await res.json();
      return data;
    },
  });
  return [movies, loading, refetch];
};

export default useMovies;