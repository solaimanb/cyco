import axios from 'axios';

const useMovies = async () => {
  const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/actors/get-all-videos',
    params: {
      nconst: 'nm0001667',
      region: 'US',
    },
    headers: {
      'X-RapidAPI-Key': 'ead3a412dbmsh8c76c8c4bf865b3p1e888cjsn82bebe877412',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    const data = response?.data?.resource?.videos;
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default useMovies;

//   const fetchMovies = async () => {
//     const url = 'https://imdb8.p.rapidapi.com/actors/get-all-videos';
//     const headers = {
//       'X-RapidAPI-Key': 'ead3a412dbmsh8c76c8c4bf865b3p1e888cjsn82bebe877412',
//       'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
//     };
//     params = {
//       nconst: 'nm0001667',
//       region: 'US',
//     };
//     const res = await axios.get(url, { headers, params });
//     return res.data;
//   };

//   const {
//     data: movies = [],
//     isLoading: loading,
//     refetch,
//   } = useQuery(['movies'], fetchMovies);

//   console.log(movies);
//   return [movies, loading, refetch];
