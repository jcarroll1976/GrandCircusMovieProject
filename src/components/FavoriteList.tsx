import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './FavoriteList.css';
import MovieContext from "../context/MovieContext";
import SingleMovie from "./MovieComponent";
import Movie from '../models/MovieInterface';


interface Props {
    movie: Movie;
}

function FavoriteList() {
    const { favoriteMovies , addFavorite, removeFavorite } = useContext(MovieContext);
    const [isShown, setIsShown] = useState(false);


    return (
       <div className="FavoriteList">
           <h2>Your favorite movies</h2>
                {favoriteMovies.map((favoriteMovies, i) =>
                <><img onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} className="Poster" key={i} src={"https://image.tmdb.org/t/p/original/" + favoriteMovies.poster_path} /><button  onClick={() => removeFavorite(favoriteMovies)} className="" key={i}> Remove Favorite</button> {isShown && (
                    <div className="Description">
                     <p> {favoriteMovies.overview} </p>
                    </div>
                  )}</>)}
                
                <p><Link to={"/"}>Return to Main Menu</Link></p>
       </div>
    );
};

export default FavoriteList