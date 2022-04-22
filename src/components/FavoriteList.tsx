import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import './FavoriteList.css';
import MovieContext from "../context/MovieContext";
import SingleMovie from "./MovieComponent";

function FavoriteList() {
    const { favoriteMovies } = useContext(MovieContext);
    return (
       <div>
           <h1>Your favorite movies</h1>
           
           <Link to={"/"}>To go back to main menu</Link>
       </div>
    );
};

export default FavoriteList