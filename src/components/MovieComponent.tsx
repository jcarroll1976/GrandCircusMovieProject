import React, { useContext, useEffect, useState } from "react";
import Movie from '../models/MovieInterface';
import MovieContext from "../context/MovieContext";
import { fetchMovies } from "../services/MovieService";
import AddFavorites from "./AddFavorites";
import { Link } from "react-router-dom";

interface Props {
    movie: Movie;
}

export default function SingleMovie({movie}: Props) {
const {favoriteMovies , addFavorite, removeFavorite} = useContext(MovieContext)
const [isShown, setIsShown] = useState(false);




 return (
    <div className = "Movie">
        <img onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} className="Poster" src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}/>
        {isShown && (
        <div className="Description">
         <p> {movie.overview} </p>
        </div>
      )}
        <div onClick={() => addFavorite(movie)}>
        <AddFavorites />
        </div>
    </div>
    
 )
}