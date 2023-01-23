import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import './Row.css'
import MovieModal from './MovieModal';
import default_img from '../images/default_img.jpg';

// swiper
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
            <Swiper
                modules={[Navigation]}
                loop={true}
                navigation
                breakpoints={{
                    1378: {
                        slidesPerView: 7,
                        slidesPerGroup: 7,
                    },
                    998: {
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                    },
                    625: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                    },
                    0: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    }
                }}
            >
                <div id={id} className='row_posters'>
                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <SwiperSlide>
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
                            </SwiperSlide> 
                        </div>
                    ))}
                </div>
            </Swiper>
                {
                    modalOpen && ( <MovieModal {...movieSelected} setModalOpen={setModalOpen} /> )
                }
        </section>
    )
}
