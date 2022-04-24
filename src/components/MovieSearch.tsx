import { FormEvent, useState } from 'react'
import './MovieSearch.css'

interface Props {
    onSubmit:(primary_release_year:number,rating:number,genre:string) => void;
}

function MovieSearch({onSubmit}:Props) {
    const [primary_release_year,setPrimary_Release_Year] =useState("");
    const [rating,setRating] = useState("");
    const [genre,setGenre] =useState("")
    /*const [genre,setRating] = useState("");
const [length,setLength] =useState("");*/


    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        onSubmit(Number(primary_release_year),Number(rating),genre);
        setPrimary_Release_Year("")
    }
        
    return (
        <div className='MovieSearch'>
            <form onSubmit={handleSubmit}>
                    
                    <p>
                        <label className="Labels" htmlFor="MovieSearch_year">Release Year</label>
                        <input className = "Inputs" id = "MovieSearch_year"  value={primary_release_year}
                            onChange = {e => setPrimary_Release_Year(e.target.value)} />
                    </p>
                   <p>
                        <label className="Labels" htmlFor="MovieSearch_rating">Search By Rating(1-10)</label>
                        <input className = "Inputs" id = "MovieSearch_rating" value={rating}
                            onChange = {e => setRating(e.target.value)} />
    </p>
    <p>
                    <select value={genre} onChange={e => setGenre(e.target.value)}>
                        <option value="27">Horror</option>
                        <option value="12">Adventure</option>
                        <option value="878">Sci-Fi</option>
                        <option value="9648">Mystery</option>
                        <option value="35">Comedy</option>
          </select>
    </p>
                  {/*}  <p>
                        <label className = "Labels" htmlFor="MovieSearch_length">Length</label>
                        <input className = "Inputs" id = "MovieSearch_length" required value={length}
    onChange = {e => setLength(e.target.value)/>
    </p>*/}
                    <input id="SubmitButton" type="submit" value="Search Movies" />
                </form>
        </div>
    )
}

export default MovieSearch