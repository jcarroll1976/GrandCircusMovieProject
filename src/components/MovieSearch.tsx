import { FormEvent, useState } from 'react'
import './MovieSearch.css'

interface Props {
    onSubmit:(primary_release_year:number) => void;
}

function MovieSearch({onSubmit}:Props) {
    const [primary_release_year,setPrimary_Release_Year] =useState("");

    /*const [genre,setRating] = useState("");
const [length,setLength] =useState("");*/


    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        onSubmit(Number(primary_release_year));
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
                    <select value={this.state.value} onChange={this.handleChange}>
            <option value="horror">Horror</option>
            <option value="adventure">Adventure</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="mystery">Mystery</option>
          </select>
    </p>
                    <p>
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