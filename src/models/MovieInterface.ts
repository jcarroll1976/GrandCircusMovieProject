import React from "react";

export default interface Movie {
    original_title: string;
    id: number;
    vote_average: number;
    overview: string;
    runtime: number;
    genre: string;
    poster_path: string;
    genre_ids: GenreResults[];
}


export interface APIResponse {
    results: Movie[];
    
}

export interface GenreResults {
    genre_ids: number[];
}


