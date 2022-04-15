import React, {ReactNode, useState} from 'react';
import Movie from '../models/MovieInterface';
import MovieContext from '../context/MovieContext'
import { setSourceMapRange } from 'typescript';

interface Props {
    children: ReactNode;
}

export default function MovieContextProvider({children}: Props) {
    const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

    function addFavorite(faveMovie: Movie): void {
        setFavoriteMovies(prev => [...prev, faveMovie])
    }   

    const removeFavorite=(faveMovie: Movie)=>{
        var index= favoriteMovies.indexOf(faveMovie)
        if(index!==-1){
            setFavoriteMovies(prev=>prev.splice(index, 1))
        }
    }

    return (
        <MovieContext.Provider value = {{favoriteMovies, addFavorite, removeFavorite}}>
            {children}
        </MovieContext.Provider>
    )
}