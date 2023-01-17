import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: '4ac991f813b0065592d202db9eed5093',
        language: 'ko-KR'
    }
})

export default instance;