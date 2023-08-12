import MovoCard from '../../../components/MovoCard/MovoCard';

const MostRecent = () => {
    const movies = [
        {
          title: 'Inception',
          genre: 'Science Fiction',
          releaseYear: '2010',
          image: 'https://i.ibb.co/TYp2Y5C/8-jpg.png',
    
          rating: 8.8,
          director: 'Christopher Nolan',
          duration: '2h 28m',
        },
        {
          title: 'The Shawshank Redemption',
          genre: 'Drama',
          releaseYear: '1994',
          image: 'https://i.ibb.co/TYp2Y5C/8-jpg.png',
    
          rating: 9.3,
          director: 'Frank Darabont',
          duration: '2h 22m',
        },
        {
          title: 'The Dark Knight',
          genre: 'Action, Crime, Drama',
          releaseYear: '2008',
          image: 'https://i.ibb.co/TYp2Y5C/8-jpg.png',
    
          rating: 9.0,
          director: 'Christopher Nolan',
          duration: '2h 32m',
        },
        {
          title: 'Interstellar',
          genre: 'Adventure, Drama, Sci-Fi',
          releaseYear: '2014',
          image: 'https://i.ibb.co/TYp2Y5C/8-jpg.png',
    
          rating: 8.6,
          director: 'Christopher Nolan',
          duration: '2h 49m',
        },
        {
          title: 'The Matrix',
          genre: 'Action, Sci-Fi',
          releaseYear: '1999',
          image: 'https://i.ibb.co/TYp2Y5C/8-jpg.png',
    
          rating: 8.7,
          director: 'Lana Wachowski, Lilly Wachowski',
          duration: '2h 16m',
        },
        {
          title: 'Pulp Fiction',
          genre: 'Crime, Drama',
          releaseYear: '1994',
          image: 'https://i.ibb.co/TYp2Y5C/8-jpg.png',
    
          rating: 8.9,
          director: 'Quentin Tarantino',
          duration: '2h 34m',
        },
        {
          title: 'Avatar',
          genre: 'Action, Adventure, Fantasy',
          releaseYear: '2009',
          image: 'https://i.ibb.co/TYp2Y5C/8-jpg.png',
    
          rating: 7.8,
          director: 'James Cameron',
          duration: '2h 42m',
        },
        {
          title: 'Forrest Gump',
          genre: 'Drama, Romance',
          releaseYear: '1994',
          image: 'https://i.ibb.co/TYp2Y5C/8-jpg.png',
    
          rating: 8.8,
          director: 'Robert Zemeckis',
          duration: '2h 22m',
        },
        {
          title: 'The Godfather',
          genre: 'Crime, Drama',
          releaseYear: '1972',
          image: 'https://i.ibb.co/TYp2Y5C/8-jpg.png',
    
          rating: 9.2,
          director: 'Francis Ford Coppola',
          duration: '2h 55m',
        },
        {
          title: 'Avengers: Endgame',
          genre: 'Action, Adventure, Sci-Fi',
          releaseYear: '2019',
          image: 'https://i.ibb.co/TYp2Y5C/8-jpg.png',
    
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
