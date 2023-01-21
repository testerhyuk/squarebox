import React, { useEffect } from 'react'
import './MovieModal.css'
import { useState } from 'react';
import styled from 'styled-components';
import Youtube from '../Youtube';
import axios from '../../api/axios';

function MovieModal({
    id,
    backdrop_path,
    title,
    overview,
    name,
    release_date,
    first_air_date,
    vote_average,
    setModalOpen,
}) {
    const [isClicked, setIsClicked] = useState(false);
    const [movieURL, setMovieURL] = useState({})

    useEffect(() => {
        fetchVideoURL();
    }, [])

    const fetchVideoURL = async () => {
        const {data: movieDetail} = await axios.get(`movie/${id}`, {
            params: {append_to_response: 'videos'}
        });
        setMovieURL(movieDetail)
    }
    

    if(!isClicked) {
        return (
            <div className='presentation'>
                <div className='wrapper-modal'>
                    <Layer onClick={()=> setModalOpen(false)}></Layer>
                    <div className='modal'>
                        <span onClick={()=> setModalOpen(false)} className='modal-close'>
                            X
                        </span>
                        <img
                            className='modal_poster-img'
                            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                            alt='modal_poster-img'
                        />
                        
                        <div className='modal_content'>
                            <button 
                                className='modal_button play'
                                onClick={() => setIsClicked(true)}
                            >
                                ▶ 재생
                            </button>
                            <p className='modal_details'>
                                <span className='modal_user-prec'>
                                    100% for you
                                </span>
                                {release_date ? release_date : first_air_date}
                            </p>
                            <h2 className='modal_title'>{title ? title : name}</h2>
                            <p className='modal_overview'>평점: {vote_average}</p>
                            <p className='modal_overview'>{overview}</p>
                        </div>
                    </div>
                    <Layer onClick={()=> setModalOpen(false)}></Layer>
                </div>
            </div>
        )
    } else {
        return(
            <Youtube movieURL={movieURL} />
        )
        
    }
}

const Layer = styled.div`
    width:15%;
`

export default MovieModal;