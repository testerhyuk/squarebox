import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import './Row.css'
import MovieModal from './MovieModal';
import default_img from '../images/default_img.jpg';

export default function Row({ title, fetchUrl, isLargeRow, id}) {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({})
    const img_url = 'https://image.tmdb.org/t/p/original/'

    useEffect(() => {
        fetchMovieData();
    }, []);
    
    const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
    };

    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelected(movie);
    }
    return (
        <section className='row'>
            <h2>{title}</h2>
            <div className='slider'>
                <div 
                    className='slider_arrow-left'
                    onClick={() => {
                        document.getElementById(id).scrollLeft -= window.innerWidth + 80;
                    }}
                >
                    <span className='arrow'>
                        {'<'}
                    </span>
                </div>
                <div id={id} className='row_posters'>
                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <img
                                onClick={() => handleClick(movie)}
                                className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                                src={isLargeRow ? 
                                    (movie.poster_path === null ? default_img : img_url + movie.poster_path) : 
                                    (movie.backdrop_path === null ? default_img : img_url + movie.backdrop_path)
                                }
                                loading='lazy'
                                alt={movie.name}
                            />
                            <h1 className='img_movie_name'>{movie?.title || movie?.name || movie?.original_name}</h1>
                        </div>
                    ))}
                </div>
                <div 
                    className='slider_arrow-right'
                    onClick={() => {
                        document.getElementById(id).scrollLeft += window.innerWidth - 80;
                    }}
                >
                    <span className='arrow'>
                        {'>'}
                    </span>
                </div>
            </div>
                {
                    modalOpen && ( <MovieModal {...movieSelected} setModalOpen={setModalOpen} /> )
                }

        </section>
    )
}
