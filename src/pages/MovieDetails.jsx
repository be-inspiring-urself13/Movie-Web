import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieDetails() {
  const { id } = useParams(); // URL la id edukkum
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const apiKey = "53427836f04e8af4262ad913d07472e1";
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!movie) {
    return  <div className="flex flex-col justify-center items-center h-screen font-semibold">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
            <h1 className="mt-4 text-3xl">Loading...</h1>
        </div>
  }

  return (
    <div className="p-4 bg-black pt-20 mt-11 flex flex-col md:flex-row items-center justify-center text-white">
      {/* Poster */}
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="w-64 md:w-80 lg:w-96 rounded-lg shadow-lg"
      />

      {/* Details */}
      <div className="mt-6 md:mt-0 md:ml-10 max-w-xl">
        <h1 className="text-3xl text-white font-bold mb-4">{movie.title}</h1>
        <p className="text-white mb-2">
          <span className="font-semibold">Release Date:</span>{" "}
          {movie.release_date}
        </p>
        <p className="text-white mb-2">
          <span className="font-semibold">Rating:</span> ⭐{" "}
          {movie.vote_average.toFixed(1)}
        </p>
        <p className="text-white  mb-2">
          <span className="font-semibold">Language:</span> {" "}
          {movie.original_language.toUpperCase()}
        </p>

        <p className="text-white mt-4 mb-2 leading-relaxed">
          {movie.overview ? movie.overview : "No description available."}
        </p>
      </div>
    </div>
  );
}

export default MovieDetails