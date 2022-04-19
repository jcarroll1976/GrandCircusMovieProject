import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import './FavoriteList.css';
import MovieContext from "../context/MovieContext";

function FavoriteList() {
    const { favoriteMovies } = useContext(MovieContext);
    return (
       <div>
           <h1>Your favorite movies</h1>
           <ul>
               {favoriteMovies.map((todo, i) =>
               <li key={i}>{}</li>)}
           </ul>
           <Link to={"/"}>To go back to main menu</Link>
       </div>
    );
};

export default FavoriteList