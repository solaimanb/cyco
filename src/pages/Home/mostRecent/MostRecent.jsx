import MovoCard from '../../../components/movoCard/MovoCard';

const MostRecent = () => {
    const movies = [
        {
          title: 'Haunted Mansion',
          genre: 'Comedy, Drama, Kids & Family, Horror',
          releaseYear: '28 July 2023',
          image: 'https://assets.gadgets360cdn.com/pricee/assets/product/202303/Haunted-Mansion_1678182019.jpg',
    
          rating: 8.8,
          director: 'Justin Simien',
          duration: '2h 3min',
        },
        {
          title: 'The Shawshank Redemption',
          genre: 'Drama',
          releaseYear: '1994',
          image: 'https://www.scrolldroll.com/wp-content/uploads/2020/01/Avatar-Highest-Grossing-Hollywood-Movies.jpg',
    
          rating: 9.3,
          director: 'Frank Darabont',
          duration: '2h 22m',
        },
        {
          title: 'The Conjuring',
          genre: 'Action, Crime, Drama',
          releaseYear: '2008',
          image: 'https://www.scrolldroll.com/wp-content/uploads/2021/07/the-conjuring-best-hollywood-movies-of-recent-times-691x1024.jpg',
    
          rating: 9.0,
          director: 'Christopher Nolan',
          duration: '2h 32m',
        },
        {
          title: 'Moonlight',
          genre: 'Adventure, Drama, Sci-Fi',
          releaseYear: '2014',
          image: 'https://www.scrolldroll.com/wp-content/uploads/2021/04/moonlight-best-hollywood-lgbtq-movies-1-691x1024.jpg',
    
          rating: 8.6,
          director: 'Christopher Nolan',
          duration: '2h 49m',
        },
        {
          title: 'Boyhood',
          genre: 'Action, Sci-Fi',
          releaseYear: '1999',
          image: 'https://www.scrolldroll.com/wp-content/uploads/2021/03/boyhood-oscar-winning-movies-691x1024.jpg',
    
          rating: 8.7,
          director: 'Lana Wachowski, Lilly Wachowski',
          duration: '2h 16m',
        },
        {
          title: 'Inception',
          genre: 'Crime, Drama',
          releaseYear: '1994',
          image: 'https://www.scrolldroll.com/wp-content/uploads/2021/05/inception-best-movies-of-christopher-nolan-691x1024.jpg',
    
          rating: 8.9,
          director: 'Quentin Tarantino',
          duration: '2h 34m',
        },
        {
          title: 'Brokeback Mountain',
          genre: 'Action, Adventure, Fantasy',
          releaseYear: '2009',
          image: 'https://www.scrolldroll.com/wp-content/uploads/2021/04/brokeback-mountain-best-hollywood-lgbtq-movies.jpg',
    
          rating: 7.8,
          director: 'James Cameron',
          duration: '2h 42m',
        },
        {
          title: 'Under the Silver Lake',
          genre: 'Drama, Romance',
          releaseYear: '1994',
          image: 'https://www.scrolldroll.com/wp-content/uploads/2021/02/under-the-silver-lake-underrated-hollywood-movies.jpg',
    
          rating: 8.8,
          director: 'Robert Zemeckis',
          duration: '2h 22m',
        },
        {
          title: 'Interstellar',
          genre: 'Crime, Drama',
          releaseYear: '1972',
          image: 'https://www.scrolldroll.com/wp-content/uploads/2021/05/interstellar-best-movies-of-christopher-nolan-691x1024.jpg',
    
          rating: 9.2,
          director: 'Francis Ford Coppola',
          duration: '2h 55m',
        },
        {
          title: 'Black Panther',
          genre: 'Action, Adventure, Sci-Fi',
          releaseYear: '2019',
          image: 'https://www.scrolldroll.com/wp-content/uploads/2021/02/black-panther-best-hollywood-superhero-movies-702x1024.jpg',
    
          rating: 8.4,
          director: 'Anthony Russo, Joe Russo',
          duration: '3h 1m',
        },
      ];
  return (
    <div className="w-full flex flex-wrap gap-1">
       {movies.map((movie, index) => (
        <MovoCard key={index} movie={movie}></MovoCard>
      ))}
    </div>
  );
};

export default MostRecent;
