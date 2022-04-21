import React from "react";
import Movie from "../models/MovieInterface";
import SingleMovie from "./MovieComponent";
import { useState, useEffect } from "react";
import { fetchMovies } from "../services/MovieService";

export default function MovieContainer() {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        fetchMovies().then(data => {
            setMovies(data);
        });
    }, []);

    return(
        <div className="MovieContainer">
            //the movies here
        </div>
    )
}