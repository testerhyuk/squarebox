import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import './Row.css'

export default function Row({ title, fetchUrl, isLargeRow, id}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovieData();
      });
    
    const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    console.log("request", request);
    setMovies(request.data.results);
    };
    
  return (
    <section className='row'>
        <h2>{title}</h2>
        <div className='slider'>
            <div className='slider_arrow-left'>
                <span 
                    className='arrow'
                    onClick={() => {
                        document.getElementById(id).scrollLeft -= window.innerWidth + 80;
                    }}
                >
                    {'<'}
                </span>
            </div>
            <div id={id} className='row_posters'>
                {movies.map((movie) => (
                    <div>
                        <img
                            key={movie.id}
                            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                            src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            loading='lazy'
                            alt={movie.name}
                        />
                        <h1 className='img_movie_name'>{movie?.title || movie?.name || movie?.original_name}</h1>
                    </div>
                ))}
            </div>
            <div className='slider_arrow-right'>
                <span 
                    className='arrow'
                    onClick={() => {
                        document.getElementById(id).scrollLeft += window.innerWidth - 80;
                    }}
                >
                    {'>'}
                </span>
            </div>
        </div>
    </section>
  )
}
