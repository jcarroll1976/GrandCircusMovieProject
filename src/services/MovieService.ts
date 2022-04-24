import axios, {AxiosResponse} from 'axios'
import Movie, { APIResponse, Genre } from '../models/MovieInterface';
const apiKey = process.env.REACT_APP_MOVIE_API_KEY || "";


export function fetchMovies(): Promise<Movie[]> {
    return axios.get<APIResponse>(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
    .then(response => response.data.results);
}

export function fetchFilteredMovies(primary_release_year:number,genre:string): Promise<Movie[]> {
    return axios.get<APIResponse>(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&primary_release_year=${primary_release_year}&with_genres=${genre}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
    .then(response => response.data.results);
}
export function fetchGenres(): Promise<Genre[]> {
    return axios.get<APIResponse>(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
    .then(response => response.data.genres)
}