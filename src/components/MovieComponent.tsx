import React, { useEffect, useState } from "react";
import Movie from '../models/MovieInterface';
import MovieContext from "../context/MovieContext";
import { fetchMovies } from "../services/MovieService";

export default function Movie() {
 const [movies, setMovies] = useState<Movie[]>([]);

 useEffect(() => {
     fetchMovies().then(data => {
         setMovies(data);
     });
 }, []);
}