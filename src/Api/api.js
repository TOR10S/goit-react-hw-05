import axios from "axios";

export async function fetchFilms() {
    const { data } = await axios.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US", {headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjQ0NzJlMzg2NmQ3ZDNlMThhODIxMWJkNGEzODU3MiIsIm5iZiI6MTcyNzM2NTYwMS41NzkzMjksInN1YiI6IjY2ZjU1YjBjNGY5NDljN2E1YzQ3ZTYzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-6gq3N_s1FP813KdsqQnUsjqNoT9yKw_k8aA_DS6VKM'
    }})
    return data.results
}

export async function fetchFilmDetails(movieID) {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?language=en-US`, {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjQ0NzJlMzg2NmQ3ZDNlMThhODIxMWJkNGEzODU3MiIsIm5iZiI6MTcyNzM2NTYwMS41NzkzMjksInN1YiI6IjY2ZjU1YjBjNGY5NDljN2E1YzQ3ZTYzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-6gq3N_s1FP813KdsqQnUsjqNoT9yKw_k8aA_DS6VKM`
        }
    });
    return data; 
}

export async function fetchFilmActors(movieID) {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/credits?language=en-US`, {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjQ0NzJlMzg2NmQ3ZDNlMThhODIxMWJkNGEzODU3MiIsIm5iZiI6MTcyNzM2NTYwMS41NzkzMjksInN1YiI6IjY2ZjU1YjBjNGY5NDljN2E1YzQ3ZTYzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-6gq3N_s1FP813KdsqQnUsjqNoT9yKw_k8aA_DS6VKM`
        }
    });
    return data; 
}

export async function fetchFilmReviews(movieID) {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/reviews?language=en-US&page=1`, {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjQ0NzJlMzg2NmQ3ZDNlMThhODIxMWJkNGEzODU3MiIsIm5iZiI6MTcyNzM2NTYwMS41NzkzMjksInN1YiI6IjY2ZjU1YjBjNGY5NDljN2E1YzQ3ZTYzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-6gq3N_s1FP813KdsqQnUsjqNoT9yKw_k8aA_DS6VKM`
        }
    });
    return data; 
}

export async function fetchFilmsByQuery(query) {
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, {headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjQ0NzJlMzg2NmQ3ZDNlMThhODIxMWJkNGEzODU3MiIsIm5iZiI6MTcyNzM2NTYwMS41NzkzMjksInN1YiI6IjY2ZjU1YjBjNGY5NDljN2E1YzQ3ZTYzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-6gq3N_s1FP813KdsqQnUsjqNoT9yKw_k8aA_DS6VKM'
    }})
    return data.results
}