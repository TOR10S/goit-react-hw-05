import Navigation from "./components/Navigation/Navigation"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import NotFound from "./pages/NotFound/NotFound"
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage"

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/movies/:movieID" element={<MovieDetailsPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
