//Home.jsx
import { useEffect, useState } from "react"
import Moviecard from "../components/Moviecard"

function Home() {


    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    useEffect(() => {

        let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=53427836f04e8af4262ad913d07472e1`

        if (search) {
            url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=53427836f04e8af4262ad913d07472e1`
        }

        fetch(url)
            .then((response) => response.json())
            .then((data) => setMovies(data.results));

    }, [page, search])


    return (
        <div className="p-4 pt-16 bg-black">
            <input type="text"
             placeholder="Search Movies..."
            onChange={(e) => setSearch(e.target.value)}
                className="p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 w-3/4 md:w-1/2 border rounded border-gray-700 bg-gray-900 bg-opacity-60 backdrop-blur-md text-white fixed top-20 left-1/2 transform -translate-x-1/2 z-10" />

            <div className="movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
                {movies.map((movie) => {
                    return (
                        <Moviecard key={movie.id} movie={movie} />
                    )
                })}

            </div>
            <div className="pagination-container flex justify-between mt-5">
                <button disabled={page == 1}
                    className="p-2 bg-gray-700 rounded text-white"
                    onClick={() => {
                        setPage((prev) => prev - 1);
                    }}>PREV</button>
                <button className="p-2 bg-gray-700 rounded text-white"
                    onClick={() => {
                        setPage((nxt) => nxt + 1);
                    }}>NEXT</button>
            </div>
        </div>
    )
}

export default Home
