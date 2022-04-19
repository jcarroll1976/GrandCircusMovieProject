import { FormEvent, useState } from 'react'
import './MovieSearch.css'

interface Props {
    onSubmit: (genre:string,rating:string,length:number) => void;
}
function MovieSearch({onSubmit}:Props) {
    const [genre,setGenre] = useState("");
    const [rating,setRating] = useState("");
    const [length,setLength] =useState("");


    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        onSubmit(genre,rating,Number(length));
    }
        
    return (
        <div className='MovieSearch'>
            <form onSubmit={handleSubmit}>
                    
                    <p>
                        <label htmlFor="MovieSearch_genre">Genre</label>
                        <input id = "MovieSearch_genre" required value={genre}
                            onChange = {e => setGenre(e.target.value)} />
                    </p>
                    <p>
                        <label htmlFor="MovieSearch_rating">Rating</label>
                        <input id = "MovieSearch_rating" required value={rating}
                            onChange = {e => setRating(e.target.value)} />
                    </p>
                    <p>
                        <label htmlFor="MovieSearch_length">Length</label>
                        <input id = "MovieSearch_length" required value={length}
                            onChange = {e => setLength(e.target.value)} />
                    </p>
                    <input type="submit" value="Add Post" />
                </form>
        </div>
    )
}

export default MovieSearch