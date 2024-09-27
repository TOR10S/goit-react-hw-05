import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchFilmsByQuery } from "../../Api/api";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";

export default function MoviesPage() {
    const [films, setFilms] = useState(() => {
        const savedFilms = sessionStorage.getItem("films");
        return savedFilms ? JSON.parse(savedFilms) : [];
    });
    const [searchParams] = useSearchParams();
    const submittedQuery = searchParams.get("query");

    useEffect(() => {
        if (!submittedQuery) return;

        const fetchMovies = async () => {
            try {
                const response = await fetchFilmsByQuery(submittedQuery);
                setFilms(response);
                sessionStorage.setItem("films", JSON.stringify(response)); 
            } catch (error) {
                alert(error);
            }
        };

        fetchMovies();
    }, [submittedQuery]);

    return (
        <>
            <SearchForm />
            <MovieList movies={films} />
        </>
    );
}
