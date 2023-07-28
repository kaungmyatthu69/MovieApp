import axios from "axios";
export const domainUrl = "https://api.themoviedb.org/3";
export const axiosInstance = axios.create({
    baseURL:domainUrl,
    timeout:10000,
    headers :{
        accept:'application/json',
        Authorization:' Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2UxMjhiYzI2MzU0NjBmMTVlMDMxYzVlNTZkNTQ2MSIsInN1YiI6IjY0YzBkMzlmZGY4NmE4MDE0NDZiZWQ4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGiFdVZTvBS_3osr9Ns9anzNeGdL-XmQnUFDBrqcaUM'
    }
})
