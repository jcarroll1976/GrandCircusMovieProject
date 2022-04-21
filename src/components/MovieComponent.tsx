import React, { useEffect, useState } from "react";
import Movie from '../models/MovieInterface';
import MovieContext from "../context/MovieContext";
import { fetchMovies } from "../services/MovieService";

interface Props {
    movie: Movie;
}

export default function SingleMovie({movie}: Props) {

 return (
    <div className = "Movie">
        //movie poster and title Header
        <img src = {movie.poster_path}/>
    </div>
 )
}