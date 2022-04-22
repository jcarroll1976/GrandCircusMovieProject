import { Link, useSearchParams } from "react-router-dom";
import MovieSearch from "./MovieSearch";



function Header() {
    const [searchParams] = useSearchParams()
    return(
    <header className="Header">
        <h1 className = "MovieSearchHeader">&#9733;Movie Search&#9733;</h1>
        <Link to={`/favorite-list/`}>Favorite List</Link>
        <div>
            <MovieSearch onSubmit={useSearchParams} /> 
        </div>
    </header>
    )
}

export default Header