import { Link, useLocation} from "react-router-dom"

export default function MovieList({movies}) {

    const location = useLocation()
    return (
        <ul>
            {movies.map((movie) => {
                return <li key={movie.id}><Link to={`/movies/${movie.id.toString()}`} state={{ from: location.pathname }}>{movie.title}</Link></li>
            })}
        </ul>
    )
}