import { useParams } from "react-router-dom"
import { fetchFilms } from "../../Api/api"
import { useEffect, useState } from "react"

export default function MovieDetailsPage() {
    const [film, setFilm] = useState(null)
    const { movieID } = useParams()
    console.log(movieID);
    
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetchFilms();
            setFilm(response.find((option) => {
                console.log(option);
                
                if (option.id === movieID) {
                    return option
                }
            }))
        }
        fetchMovies()
        console.log("cat");
        
        console.log(film)
    }, [movieID])

    return (
        <p>{film.title}</p>
    )
}