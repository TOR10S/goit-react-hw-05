import Navigation from "./components/Navigation/Navigation"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage"
import MovieCast from "./components/MovieCast/MovieCast"
import MoviesReviews from "./components/MovieReviews/MovieReviews"
import MoviesPage from "./pages/MoviesPage/MoviesPage"

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/movies" element={<MoviesPage/>} />
        <Route path="/movies/:movieID" element={<MovieDetailsPage/>}>
          <Route path="actors" element={<MovieCast/>}/>
          <Route path="reviews" element={<MoviesReviews/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}

export default App
