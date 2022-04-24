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




 return (
    <div className = "Movie">
        <img className="Poster" src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}/>
        <div onClick={() => addFavorite(movie)}>
        <AddFavorites />
        </div>
    </div>
 )
}