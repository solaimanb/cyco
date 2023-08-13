import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import MovieCard from '../../components/movieCard/MovieCard';
import Pagination from '../../components/paginaition/Pagination';

const Movies = () => {
  const movies = [
    {
      title: 'Haunted Mansion',
      genre: 'Comedy, Drama, Kids & Family, Horror',
      releaseYear: '28 July 2023',
      image:
        'https://assets.gadgets360cdn.com/pricee/assets/product/202303/Haunted-Mansion_1678182019.jpg',

      rating: 8.8,
      director: 'Justin Simien',
      duration: '2h 3min',
    },
    {
      title: 'The Shawshank Redemption',
      genre: 'Drama',
      releaseYear: '1994',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2020/01/Avatar-Highest-Grossing-Hollywood-Movies.jpg',

      rating: 9.3,
      director: 'Frank Darabont',
      duration: '2h 22m',
    },
    {
      title: 'The Conjuring',
      genre: 'Action, Crime, Drama',
      releaseYear: '2008',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/07/the-conjuring-best-hollywood-movies-of-recent-times-691x1024.jpg',

      rating: 9.0,
      director: 'Christopher Nolan',
      duration: '2h 32m',
      movieURL: 'https://www.youtube.com/watch?v=atnW4D6pc-w',
    },
    {
      title: 'Moonlight',
      genre: 'Adventure, Drama, Sci-Fi',
      releaseYear: '2014',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/04/moonlight-best-hollywood-lgbtq-movies-1-691x1024.jpg',

      rating: 8.6,
      director: 'Christopher Nolan',
      duration: '2h 49m',
    },
    {
      title: 'Boyhood',
      genre: 'Action, Sci-Fi',
      releaseYear: '1999',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/03/boyhood-oscar-winning-movies-691x1024.jpg',

      rating: 8.7,
      director: 'Lana Wachowski, Lilly Wachowski',
      duration: '2h 16m',
    },
    {
      title: 'Inception',
      genre: 'Crime, Drama',
      releaseYear: '1994',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/05/inception-best-movies-of-christopher-nolan-691x1024.jpg',

      rating: 8.9,
      director: 'Quentin Tarantino',
      duration: '2h 34m',
    },
    {
      title: 'Brokeback Mountain',
      genre: 'Action, Adventure, Fantasy',
      releaseYear: '2009',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/04/brokeback-mountain-best-hollywood-lgbtq-movies.jpg',

      rating: 7.8,
      director: 'James Cameron',
      duration: '2h 42m',
    },
    {
      title: 'Under the Silver Lake',
      genre: 'Drama, Romance',
      releaseYear: '1994',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/02/under-the-silver-lake-underrated-hollywood-movies.jpg',

      rating: 8.8,
      director: 'Robert Zemeckis',
      duration: '2h 22m',
    },
    {
      title: 'Interstellar',
      genre: 'Crime, Drama',
      releaseYear: '1972',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/05/interstellar-best-movies-of-christopher-nolan-691x1024.jpg',

      rating: 9.2,
      director: 'Francis Ford Coppola',
      duration: '2h 55m',
    },
    {
      title: 'Black Panther',
      genre: 'Action, Adventure, Sci-Fi',
      releaseYear: '2019',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/02/black-panther-best-hollywood-superhero-movies-702x1024.jpg',

      rating: 8.4,
      director: 'Anthony Russo, Joe Russo',
      duration: '3h 1m',
    },
    {
      title: 'Black Panther',
      genre: 'Action, Adventure, Sci-Fi',
      releaseYear: '2019',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/02/black-panther-best-hollywood-superhero-movies-702x1024.jpg',

      rating: 8.4,
      director: 'Anthony Russo, Joe Russo',
      duration: '3h 1m',
    },
    {
      title: 'Black Panther',
      genre: 'Action, Adventure, Sci-Fi',
      releaseYear: '2019',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/02/black-panther-best-hollywood-superhero-movies-702x1024.jpg',

      rating: 8.4,
      director: 'Anthony Russo, Joe Russo',
      duration: '3h 1m',
    },
    {
      title: 'Black Panther',
      genre: 'Action, Adventure, Sci-Fi',
      releaseYear: '2019',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/02/black-panther-best-hollywood-superhero-movies-702x1024.jpg',

      rating: 8.4,
      director: 'Anthony Russo, Joe Russo',
      duration: '3h 1m',
    },
    {
      title: 'Black Panther',
      genre: 'Action, Adventure, Sci-Fi',
      releaseYear: '2019',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/02/black-panther-best-hollywood-superhero-movies-702x1024.jpg',

      rating: 8.4,
      director: 'Anthony Russo, Joe Russo',
      duration: '3h 1m',
    },
    {
      title: 'Black Panther',
      genre: 'Action, Adventure, Sci-Fi',
      releaseYear: '2019',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/02/black-panther-best-hollywood-superhero-movies-702x1024.jpg',

      rating: 8.4,
      director: 'Anthony Russo, Joe Russo',
      duration: '3h 1m',
    },
    {
      title: 'Black Panther',
      genre: 'Action, Adventure, Sci-Fi',
      releaseYear: '2019',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/02/black-panther-best-hollywood-superhero-movies-702x1024.jpg',

      rating: 8.4,
      director: 'Anthony Russo, Joe Russo',
      duration: '3h 1m',
    },
    {
      title: 'Black Panther',
      genre: 'Action, Adventure, Sci-Fi',
      releaseYear: '2019',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/02/black-panther-best-hollywood-superhero-movies-702x1024.jpg',

      rating: 8.4,
      director: 'Anthony Russo, Joe Russo',
      duration: '3h 1m',
    },
    {
      title: 'Black Panther',
      genre: 'Action, Adventure, Sci-Fi',
      releaseYear: '2019',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/02/black-panther-best-hollywood-superhero-movies-702x1024.jpg',

      rating: 8.4,
      director: 'Anthony Russo, Joe Russo',
      duration: '3h 1m',
    },
    {
      title: 'Black Panther',
      genre: 'Action, Adventure, Sci-Fi',
      releaseYear: '2019',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/02/black-panther-best-hollywood-superhero-movies-702x1024.jpg',

      rating: 8.4,
      director: 'Anthony Russo, Joe Russo',
      duration: '3h 1m',
    },
    {
      title: 'Black Panther',
      genre: 'Action, Adventure, Sci-Fi',
      releaseYear: '2019',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/02/black-panther-best-hollywood-superhero-movies-702x1024.jpg',

      rating: 8.4,
      director: 'Anthony Russo, Joe Russo',
      duration: '3h 1m',
    },
    {
      title: 'Black Panther',
      genre: 'Action, Adventure, Sci-Fi',
      releaseYear: '2019',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/02/black-panther-best-hollywood-superhero-movies-702x1024.jpg',

      rating: 8.4,
      director: 'Anthony Russo, Joe Russo',
      duration: '3h 1m',
    },
    {
      title: 'Black Panther',
      genre: 'Action, Adventure, Sci-Fi',
      releaseYear: '2019',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/02/black-panther-best-hollywood-superhero-movies-702x1024.jpg',

      rating: 8.4,
      director: 'Anthony Russo, Joe Russo',
      duration: '3h 1m',
    },
    {
      title: 'Black Panther',
      genre: 'Action, Adventure, Sci-Fi',
      releaseYear: '2019',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/02/black-panther-best-hollywood-superhero-movies-702x1024.jpg',

      rating: 8.4,
      director: 'Anthony Russo, Joe Russo',
      duration: '3h 1m',
    },
    {
      title: 'Black Panther',
      genre: 'Action, Adventure, Sci-Fi',
      releaseYear: '2019',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/02/black-panther-best-hollywood-superhero-movies-702x1024.jpg',

      rating: 8.4,
      director: 'Anthony Russo, Joe Russo',
      duration: '3h 1m',
    },
    {
      title: 'Black Panther',
      genre: 'Action, Adventure, Sci-Fi',
      releaseYear: '2019',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/02/black-panther-best-hollywood-superhero-movies-702x1024.jpg',

      rating: 8.4,
      director: 'Anthony Russo, Joe Russo',
      duration: '3h 1m',
    },
    {
      title: 'Black Panther',
      genre: 'Action, Adventure, Sci-Fi',
      releaseYear: '2019',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/02/black-panther-best-hollywood-superhero-movies-702x1024.jpg',

      rating: 8.4,
      director: 'Anthony Russo, Joe Russo',
      duration: '3h 1m',
    },
    {
      title: 'Black Panther',
      genre: 'Action, Adventure, Sci-Fi',
      releaseYear: '2019',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/02/black-panther-best-hollywood-superhero-movies-702x1024.jpg',

      rating: 8.4,
      director: 'Anthony Russo, Joe Russo',
      duration: '3h 1m',
    },
    {
      title: 'Black Panther',
      genre: 'Action, Adventure, Sci-Fi',
      releaseYear: '2019',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/02/black-panther-best-hollywood-superhero-movies-702x1024.jpg',

      rating: 8.4,
      director: 'Anthony Russo, Joe Russo',
      duration: '3h 1m',
    },
    {
      title: 'Black Panther',
      genre: 'Action, Adventure, Sci-Fi',
      releaseYear: '2019',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/02/black-panther-best-hollywood-superhero-movies-702x1024.jpg',

      rating: 8.4,
      director: 'Anthony Russo, Joe Russo',
      duration: '3h 1m',
    },
    {
      title: 'Black Panther',
      genre: 'Action, Adventure, Sci-Fi',
      releaseYear: '2019',
      image:
        'https://www.scrolldroll.com/wp-content/uploads/2021/02/black-panther-best-hollywood-superhero-movies-702x1024.jpg',

      rating: 8.4,
      director: 'Anthony Russo, Joe Russo',
      duration: '3h 1m',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // const [isMovieOpen, setIsMovieOpen] = useState(false);

  // const openMoviePlayer = () => {
  //   setIsMovieOpen(true);
  // };

  // const closeMoviePlayer = () => {
  //   setIsMovieOpen(false);
  // };

  return (
    <div className="mt-10">
      <div className="flex items-center gap-3 justify-center">
        <input
          type="search"
          className="rounded-full px-3 py-2 w-[30%]"
          placeholder="Search movies"
        />
        <FaSearch size={22} />
      </div>

      <div className="mt-10 w-full flex justify-center flex-wrap gap-1">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie}></MovieCard>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Movies;
