import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import './FavoriteList.css';
import MovieContext from "../context/MovieContext";
import SingleMovie from "./MovieComponent";
import Movie from '../models/MovieInterface';

interface Props {
    movie: Movie;
}

function FavoriteList() {
    const { favoriteMovies, addFavorite, removeFavorite } = useContext(MovieContext);


    return (
       <div className="FavoriteList">
           <h1>Your favorite movies</h1>
                <ul>
                   
                </ul>       
           <Link to={"/"}>To go back to main menu</Link>
       </div>
    );
};

export default FavoriteList