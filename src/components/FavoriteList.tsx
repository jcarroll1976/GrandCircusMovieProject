import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import './FavoriteList.css';
import MovieContext from "../context/MovieContext";
import SingleMovie from "./MovieComponent";
import Movie from '../models/MovieInterface';
import RemoveFavorite from "./RemovingFavorites";

interface Props {
    movie: Movie;
}

function FavoriteList() {
    const { favoriteMovies , addFavorite, removeFavorite } = useContext(MovieContext);


    return (
       <div className="FavoriteList">
           <h2>Your favorite movies</h2>
                {favoriteMovies.map((favoriteMovies, i) =>
                <img className="Poster" key={i} src={"https://image.tmdb.org/t/p/original/" + favoriteMovies.poster_path}/>)}    
                <RemoveFavorite />
                <p><Link to={"/"}>Return to Main Menu</Link></p>
       </div>
    );
};

export default FavoriteList