import axios, {AxiosResponse} from 'axios'
const apiKey = process.env.REACT_APP_MOVIE_API_KEY || "";
import Movie from '../models/MovieInterface';

export function fetchMovies(): Promise<Movie[]> {
    return axios.get<Movie[]>(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
    .then(response => response.data);
}

