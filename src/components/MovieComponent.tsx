import React, { useEffect, useState } from "react";
import Movie from '../models/MovieInterface';
import MovieContext from "../context/MovieContext";
import { fetchMovies } from "../services/MovieService";
import AddFavorites from "./AddFavorites";
interface Props {
    movie: Movie;
}

export default function SingleMovie({movie}: Props) {
const [favorites, setFavorites] =useState([]);
 return (
    <div className = "Movie">
        <img src={movie.poster_path}></img>
        <AddFavorites />
    </div>
 )
}