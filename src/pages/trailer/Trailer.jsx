import React from 'react';
import TrailerCard from '../../components/trailerCard/TrailerCard';

const Trailer = () => {
    const movies = [
        {
            title: 'GARGOYLE OF GOTHAM Official Trailer (2023)',
            genre: 'Gargoyle of Gotham.',
            releaseYear: '2023',
            image: 'https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/710fb97a-cf47-4b68-826c-50d7eeab6be4/Screen+Shot+2023-07-20+at+2.50.46+PM.jpg',
            video:'https://www.youtube.com/embed/atnW4D6pc-w',
            rating: 8.8,
            director: 'Gargoyle of Gotham.',
            duration: '2h 58m',
        },
        {
            title: 'DEADPOOL 3 "Wolverine Fight" Teaser Trailer (2024)',
            genre: 'Drama',
            releaseYear: '2024',
            image: 'https://static.standard.co.uk/2023/08/11/15/newFile-5.jpg?width=1200&auto=webp&quality=75',
            video:'https://www.youtube.com/embed/zgRMAiP8ls0',
            rating: 9.3,
            director: 'Frank Darabont',
            duration: '2h 22m',
        },
        {
            title: 'THE WOMAN IN THE WALL Official Trailer (2023)',
            genre: 'Action, Crime, Drama',
            releaseYear: '2023',
            image:'https://static.standard.co.uk/2023/08/11/15/newFile-5.jpg?width=1200&auto=webp&quality=75',
            video:'https://www.youtube.com/embed/jwo1zTeWwSI',
            rating: 9.0,
            director: 'Christopher Nolan',
            duration: '2h 32m',
        },
        {
            title: 'Classic Fighters Best Moview 2023',
            genre: 'Action, Crime, Drama',
            releaseYear: '2023',
            image:'https://i.ytimg.com/vi/vKQi3bBA1y8/sddefault.jpg',
            video:'https://www.youtube.com/embed/jwo1zTeWwSI',
            rating: 9.0,
            director: 'Christopher Nolan',
            duration: '2h 32m',
        },
        {
            title: 'Soloman The Warrior 2024',
            genre: 'Action, Crime, Drama',
            releaseYear: '2024',
            image:'https://film-book.com/wp-content/uploads/2013/01/ben-drew-ray-winstone-hayley-atwell-the-sweeney-01-350x164.png',
            video:'https://www.youtube.com/embed/jwo1zTeWwSI',
            rating: 9.0,
            director: 'Christopher Nolan',
            duration: '2h 32m',
        },
        {
            title: 'Mission Impossible Trailer (2024)',
            genre: 'Action, Crime, Drama',
            releaseYear: '2024',
            image:'https://cdn.vox-cdn.com/thumbor/PzR02nc02l5WcaFQBO1sErRuX4I=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10858599/mi6_c_353e_532.jpg',
            video:'https://www.youtube.com/embed/jwo1zTeWwSI',
            rating: 9.0,
            director: 'Christopher Nolan',
            duration: '2h 32m',
        },
        {
            title: 'GARGOYLE OF GOTHAM Official Trailer (2023)',
            genre: 'Gargoyle of Gotham.',
            releaseYear: '2023',
            image: 'https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/710fb97a-cf47-4b68-826c-50d7eeab6be4/Screen+Shot+2023-07-20+at+2.50.46+PM.jpg',
            video:'https://www.youtube.com/embed/atnW4D6pc-w',
            rating: 8.8,
            director: 'Gargoyle of Gotham.',
            duration: '2h 58m',
        },
        {
            title: 'KingMaster Pro Official Trailer (2023)',
            genre: 'Action, Crime, Drama',
            releaseYear: '2023',
            image:'https://static.standard.co.uk/2023/08/11/15/newFile-5.jpg?width=1200&auto=webp&quality=75',
            video:'https://www.youtube.com/embed/jwo1zTeWwSI',
            rating: 9.0,
            director: 'Christopher Nolan',
            duration: '2h 32m',
        },
        {
            title: 'Cyber 71  Official Trailer (2023)',
            genre: 'Action, Crime, Drama',
            releaseYear: '2023',
            image:'https://cdn.trendhunterstatic.com/phpthumbnails/158/158128/158128_1_800.jpeg',
            video:'https://www.youtube.com/embed/jwo1zTeWwSI',
            rating: 9.0,
            director: 'Christopher Nolan',
            duration: '2h 32m',
        },
        {
            title: 'THE WOMAN IN THE WALL Official Trailer (2023)',
            genre: 'Action, Crime, Drama',
            releaseYear: '2023',
            image:'https://static.standard.co.uk/2023/08/11/15/newFile-5.jpg?width=1200&auto=webp&quality=75',
            video:'https://www.youtube.com/embed/jwo1zTeWwSI',
            rating: 9.0,
            director: 'Christopher Nolan',
            duration: '2h 32m',
        }
    ];
    
    return (
        <div className="w-full flex flex-wrap gap-1">
            {movies.map((movie, index) => (
                <TrailerCard key={index} movie={movie}> </TrailerCard>
            ))}
        </div>
    );
};

export default Trailer;