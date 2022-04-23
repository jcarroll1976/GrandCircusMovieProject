import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import MovieSearch from "./MovieSearch";
import { fetchFilteredMovies } from "../services/MovieService";



function Header() {
    
    return(
    <header className="Header">
        <h1 className = "MovieSearchHeader">&#9733;Movie Search&#9733;</h1>
        <Link to={`/favorite-list/`}>Favorite List</Link>
        
    </header>
    )
}

export default Header