import { useQuery } from '@tanstack/react-query';

const useMovies = () => {
  const {
    data: movies = [],
    isLoading: loading,
    refetch,
    isError,
  } = useQuery({
    queryKey: ['movies'],
    queryFn: async () => {
      try {
        const res = await fetch( `${ import.meta.env.VITE_SERVER_URL }/movies` );
        if ( !res.ok ) {
          throw new Error( 'Network response failed!' );
        }
        const data = await res.json();

        if ( !data ) {
          return [];
        }

        return data;
      } catch (error) {
        console.error('Error fetching movies', error);
        throw error;
      }
    },
  });
  return [movies, loading, refetch, isError];
};

export default useMovies;
