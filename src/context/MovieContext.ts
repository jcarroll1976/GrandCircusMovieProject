import React, {createContext} from 'react';
import Movie from '../models/MovieInterface';

interface MovieContextModel {
    favoriteMovies: Movie[];
    addFavorite: (movie: Movie) => void;
    removeFavorite: (movie: Movie) => void;
}

const defaultValue: MovieContextModel = {
    favoriteMovies: [],
    addFavorite: () => {},
    removeFavorite: () => {}
}

const MovieContext = createContext(defaultValue);
export default MovieContext;
