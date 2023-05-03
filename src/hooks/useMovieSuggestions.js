import { useState, useEffect } from "react";
import { getMovies } from "../helpers";

export const useMovieSuggestions = (inputValue) => {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (inputValue.length > 3) {
                try {
                    const movies = await getMovies(inputValue);
                    const results = movies.map((movie) => movie.title);
                    setSuggestions(results);
                } catch (error) {
                    console.error(error);
                }
            } else {
                setSuggestions([]);
            }
        };

        fetchSuggestions();
    }, [inputValue]);

    return suggestions;
};

