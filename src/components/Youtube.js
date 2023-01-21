import React from 'react'
import styled from "styled-components";

export default function Youtube(movie) {
  return (
    <Container>
        <HomeContainer>
            <Iframe
                src={`https://www.youtube.com/embed/${movie.movieURL ? movie.movieURL.videos.results[0]?.key : movie.videos.results[0]?.key}
                    ?controls=1&autoplay=1&loop=1&mute=0&playlist=${movie.movieURL ? movie.movieURL.videos.results[0]?.key : movie.videos.results[0]?.key}`}
                width='640'
                height='360'
                allow="autoplay; fullscreen"
                frameborder='0'
                allowfullscreen
            ></Iframe>
        </HomeContainer>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-itmes: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
`

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    z-index: -1;
    border: none;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`