import { useQuery } from "@tanstack/react-query";

const useMovies = async () => {
  const {
    data: movies = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ['movies'],
    queryFn: async ()=>{
      const res = await fetch('http://localhost:8080/movies');
      return res;
    }
  })
  return [ movies, loading, refetch]

  // const [axiosSecure] = useAxiosSecure();

  // const {
  //   data: movies = [],
  //   isLoading: loading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ['movies'],
  //   queryFn: async () => {
  //     try {
  //       const res = await axiosSecure.get('/movies');
  //       return res.data;
  //     } catch (error) {
  //       console.log(error);
  //       return [];
  //     }
  //   },
  // });
};

export default useMovies;
