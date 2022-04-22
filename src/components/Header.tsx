import { useSearchParams } from "react-router-dom";
import MovieSearch from "./MovieSearch";



function Header() {
    const [searchParams] = useSearchParams()
    return(
    <header className="Header">
        <h1>Movie Search</h1>
        <div>
            <MovieSearch onSubmit={useSearchParams} /> 
        </div>
    </header>
    )
}

export default Header