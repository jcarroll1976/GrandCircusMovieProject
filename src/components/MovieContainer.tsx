import React from "react";
import Movie from "../models/MovieInterface";
import SingleMovie from "./MovieComponent";
import { useState, useEffect } from "react";
import { fetchMovies } from "../services/MovieService";
import { fetchFilteredMovies } from "../services/MovieService";
import MovieSearch from "./MovieSearch";

export default function MovieContainer() {
    const [movies, setMovies] = useState<Movie[]>([]);


    useEffect(() => {
        fetchMovies().then(data => {
            setMovies(data);
        });
    }, []);

    function handleSubmit(primary_release_year:number) {
        fetchFilteredMovies(primary_release_year).then(data => {
            setMovies(data);
        })
    }
    return(

        <div className="MovieContainer">
             {movies.map(movie =>
            <p className="Movie_p" key ={movie.id}><SingleMovie movie ={movie}/></p>)}
            <div>
        <MovieSearch onSubmit={handleSubmit} /> 
    </div>
        </div>
        
    )
}