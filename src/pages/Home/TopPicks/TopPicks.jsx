import MovieCard from '../../../components/movieCard/MovieCard';

const TopPicks = () => {
  const movies = [
    {
      title: 'Everything Everywhere All at Once',
      genre: 'Science Fiction',
      releaseYear: '2010',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg',

      rating: 8.8,
      director: 'Christopher Nolan',
      duration: '2h 28m',
    },
    {
      title: 'John Wick: Chapter 4 ',
      genre: 'Drama',
      releaseYear: '1994',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6EgqFz3RcZpKrqA8g-XAky0AwD7NPQd9Eigs0BaDBLMweOR4gv7ipozTdX6agzwDYA8s&usqp=CAU',

      rating: 9.3,
      director: 'Frank Darabont',
      duration: '2h 22m',
    },
    {
      title: 'The Dark Knight',
      genre: 'Action, Crime, Drama',
      releaseYear: '2008',
      image: 'https://hips.hearstapps.com/hmg-prod/images/best-new-horror-movies-2023-knock-at-the-cabin-1670003857.jpg',

      rating: 9.0,
      director: 'Christopher Nolan',
      duration: '2h 32m',
    },
    {
      title: 'Interstellar',
      genre: 'Adventure, Drama, Sci-Fi',
      releaseYear: '2014',
      image: 'https://i0.wp.com/storage.waploaded.com/images/9b3ad50eb97637e8baa6d33643c8e331.jpg?w=600&ulb=true&ssl=1',

      rating: 8.6,
      director: 'Christopher Nolan',
      duration: '2h 49m',
    },
    {
      title: 'Birds Box',
      genre: 'Action, Sci-Fi',
      releaseYear: '1999',
      image: 'https://www.digitaltrends.com/wp-content/uploads/2023/07/iTGBHdL12QEpLyRVlykDuiYxzAG.jpg?p=1#038;p=1.jpg',

      rating: 8.7,
      director: 'Lana Wachowski, Lilly Wachowski',
      duration: '2h 16m',
    },
    {
      title: 'The Platform',
      genre: 'Crime, Drama',
      releaseYear: '1994',
      image: 'https://i.pinimg.com/550x/bb/06/83/bb0683bca41055875a456851f6d99422.jpg',

      rating: 8.9,
      director: 'Quentin Tarantino',
      duration: '2h 34m',
    },
    {
      title: 'The Meg',
      genre: 'Action, Adventure, Fantasy',
      releaseYear: '2009',
      image: 'https://i.pinimg.com/originals/f0/e2/59/f0e259ac988f611aee42bcb452ef4a86.jpg',

      rating: 7.8,
      director: 'James Cameron',
      duration: '2h 42m',
    },
    {
      title: 'Into The Storm',
      genre: 'Drama, Romance',
      releaseYear: '1994',
      image: 'https://bestsimilar.com/img/movie/thumb/e3/7188.jpg',

      rating: 8.8,
      director: 'Robert Zemeckis',
      duration: '2h 22m',
    },
    {
      title: 'Golda',
      genre: 'Crime, Drama',
      releaseYear: '1972',
      image: 'https://assets.gadgets360cdn.com/pricee/assets/product/202308/Golda_poster1_1691398760.jpg',

      rating: 9.2,
      director: 'Francis Ford Coppola',
      duration: '2h 55m',
    },
    {
      title: 'Unwelcome',
      genre: 'Action, Adventure, Sci-Fi',
      releaseYear: '2019',
      image: 'https://i.etsystatic.com/28976030/r/il/50a7d6/4695258358/il_570xN.4695258358_llcv.jpg',

      rating: 8.4,
      director: 'Anthony Russo, Joe Russo',
      duration: '3h 1m',
    },
  ];

  return (
    <div className="w-full flex flex-wrap gap-1">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie}></MovieCard>
      ))}
    </div>
  );
};

export default TopPicks;
