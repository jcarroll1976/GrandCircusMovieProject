import { FormEvent, useState } from 'react'
import './MovieSearch.css'

interface Props {
    onSubmit:(primary_release_year:number,genre:string) => void;
}

function MovieSearch({onSubmit}:Props) {
    const [primary_release_year,setPrimary_Release_Year] =useState("");
    const [title,setTitle] = useState("");
    const [genre,setGenre] =useState("")
    /*const [genre,setRating] = useState("");
const [length,setLength] =useState("");*/


    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        onSubmit(Number(primary_release_year),genre);
        setPrimary_Release_Year("")
    }
        
    return (
        <div className='MovieSearch'>
            <form onSubmit={handleSubmit}>
                    
                    <p>
                        <label className="Labels" htmlFor="MovieSearch_year">Release Year</label>
                        <input className = "Inputs" id = "MovieSearch_year" required value={primary_release_year}
                            onChange = {e => setPrimary_Release_Year(e.target.value)} />
                    </p>
                   {/*<p>
                        <label className="Labels" htmlFor="MovieSearch_title">Title</label>
                        <input className = "Inputs" id = "MovieSearch_year" required value={title}
                            onChange = {e => setTitle(e.target.value)} />
    </p>*/}
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