import axios, {AxiosResponse} from 'axios'
import Movie, { APIResponse} from '../models/MovieInterface';
const apiKey = process.env.REACT_APP_MOVIE_API_KEY || "";


export function fetchMovies(): Promise<Movie[]> {
    return axios.get<APIResponse>(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
    .then(response => response.data.results);
}

export function fetchFilteredMovies(primary_release_year:number,rating:number,genre:string): Promise<Movie[]> {
    return axios.get<APIResponse>(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&primary_release_year=${primary_release_year}&with_genres=${genre}&vote_average.gte=${rating}&vote_average.lte=${rating}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
    .then(response => response.data.results);
}
