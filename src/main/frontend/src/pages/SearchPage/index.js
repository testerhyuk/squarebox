import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import "./SearchPage.css";
import MovieModal from "../../components/MovieModal";
import { useDebounce } from '../../hooks/useDebounce';

export default function SearchPage() {
    const [searchReults, setSearchResults] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({})

    const useQuery = () => {
        return new URLSearchParams(useLocation().search)
    }

    let query = useQuery();
    const searchTerm = query.get('q');
    const debouncedSearchTerm = useDebounce(searchTerm, 500)

    useEffect(() => {
        if (debouncedSearchTerm) {
            fetchSearchMovie(debouncedSearchTerm);
        }
    }, [debouncedSearchTerm]);

    const fetchSearchMovie = async (searchTerm) => {
        try {
            const request = await axios.get(
                `/search/multi?include_adult=false&query=${searchTerm}`
            );
            setSearchResults(request.data.results);
        } catch (error) {
            console.log("error");
        }
    }
    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelected(movie);
    }

    const renderSearchResults = () => {
        return searchReults.length > 0 ? (
            <div>
                <section className='search-container'>
                    {searchReults.map((movie) => {
                        if(movie.backdrop_path !== null && movie.media_type !== 'person'){
                            const movieImageUrl = 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;
                            return (
                                    <div className='movie' key={movie.id}>
                                        <div className='movie_column-poster'>
                                            <img 
                                                src={movieImageUrl} 
                                                alt='movieImage' 
                                                className='movie_poster'
                                                onClick={() => handleClick(movie)}
                                            />
                                        </div>
                                        <h1 className='search_movie_name'>{movie?.title || movie?.name || movie?.original_name}</h1>
                                    </div>
                            )
                        }
                    })}
                </section>
                <div>
                    {
                        modalOpen &&
                        (<MovieModal 
                            {...movieSelected}
                            setModalOpen={setModalOpen}
                        />)
                    }
                </div>
            </div>
        ) : (
            <section className='no-results'>
                <div className='no-results_text'>
                    <p>
                        ???????????? ????????? "{debouncedSearchTerm}"(???)??? ???????????? ????????? ????????????.
                    </p>
                </div>
            </section>
        )
    }

  return renderSearchResults();
}
