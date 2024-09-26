import axios from "axios";

export async function fetchFilms() {
    const { data } = await axios.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US", {headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjQ0NzJlMzg2NmQ3ZDNlMThhODIxMWJkNGEzODU3MiIsIm5iZiI6MTcyNzM2NTYwMS41NzkzMjksInN1YiI6IjY2ZjU1YjBjNGY5NDljN2E1YzQ3ZTYzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-6gq3N_s1FP813KdsqQnUsjqNoT9yKw_k8aA_DS6VKM'
    }})
    return data.results
}

