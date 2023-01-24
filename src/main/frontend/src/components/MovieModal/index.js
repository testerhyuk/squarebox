import React, { useEffect, useRef } from 'react'
import './MovieModal.css'
import { useState } from 'react';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import useOnClickOutside from '../../hooks/useOnClickOutside'

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
    const [movie, setMovie] = useState({})
    const navigate = useNavigate();
    const modalRef = useRef(null);
    useOnClickOutside(modalRef, () => {setModalOpen(false)});

    useEffect(() => {
        fetchVideoURL();
    }, [])

    const fetchVideoURL = async () => {
        const {data: movieDetail} = await axios.get(`movie/${id}`, {
            params: {append_to_response: 'videos'}
        });
        setMovie(movieDetail)
    }

    const navigateVideo = () => {
        navigate('video', {
            state: {
                movie: {...movie}
            }
        })
    }

    return (
        <div className='presentation'>
            <div className='wrapper-modal'>
                <div className='modal' ref={modalRef}>
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
                            onClick={navigateVideo}
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
            </div>
        </div>
    )
}

export default MovieModal;