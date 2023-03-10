import React from 'react'
import Banner from '../../components/Banner'
import Row from '../../components/Row'
import requests from '../../api/request'

export default function MainPage() {
  return (
    <div>
        <Banner />

        <Row 
        title="스퀘어 박스 오리지널"
        id='no'
        fetchUrl={requests.fetchSquareBoxOrignals}
        isLargeRow
        />

        <Row title="현재 핫한 영화" id='TN' fetchUrl={requests.fetchTrending} />
        <Row title="영화 순위" id='TR' fetchUrl={requests.fetchTopRated} />

        <Row 
        title="액션"
        id="AN"
        fetchUrl={requests.fetchActionMovies}
        />

        <Row 
        title="코미디"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
        />

        <Row 
        title="호러"
        id="HM"
        fetchUrl={requests.fetchHorrorMovies}
        />

        <Row 
        title="로맨스"
        id="RM"
        fetchUrl={requests.fetchRomanceMovies}
        />

        <Row 
        title="다큐멘터리"
        id="DM"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  )
}
