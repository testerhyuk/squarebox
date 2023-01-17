import axios from "../api/axios";
import { useEffect, useState } from "react";
import requests from "../api/request";
import React from 'react';
import './Banner.css';

export default function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async () => {
        // 현재 상영중인 영화 정보 가져오기
        const request = await axios.get(requests.fetchNowPlaying);
        console.log(request)
        // 여러 영화 중 영화 하나의 ID 가져오기
        const movieId = request.data.results[Math.floor(Math.random() * request.data.results.length)].id;

        //특정 영화의 더 상세한 정보를 가져오기(비디오 정보 포함)
        const {data: movieDetail} = await axios.get(`movie/${movieId}`, {
            params: {append_to_response: 'videos'},
        });
        setMovie(movieDetail);
    }

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n-1) + '...' : str;
    };

  return (
    <header
        className="banner"
        style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition: 'top center',
            backgroundSize: 'cover'
        }}
    >
        <div className="banner_contents">
            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner_buttons">
                <button className="banner_button play">
                    재생
                </button>
                <button className="banner_button info">
                    <div className="space"></div>
                    세부정보 더보기
                </button>
            </div>
            <h1 className="banner_description">
                {truncate(movie?.overview, 100)}
            </h1>
        </div>
        <div className="banner--fadeBottom" />
    </header>
  )
}
