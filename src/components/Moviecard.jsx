//Moviecard.jsx
import {FaHeart, FaRegHeart} from 'react-icons/fa';
import { WatchListContext } from '../context/WatchListContext';
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom';

function Moviecard({movie}) {

    const {togglewatchlist, watchlist } = useContext(WatchListContext);

    const  inWatchList = watchlist.some((m) => m.id == movie.id)

    const navigate = useNavigate();

    console.log(watchlist)

    return(
        <div className='bg-gray-800 mt-6 p-4 rounded-lg shadow-md text-white relative'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className='w-full h-80 object-contain rounded-sm cursor-pointer'
            onClick={() => navigate(`/movie/${movie.id}`)}/> 
            <h3 className='text-lg font-bold mt-4'>{movie.title}</h3>
            <p className='text-sm text-gray-400'>{movie.release_date}</p>

            <button className='absolute top-2 right-3 text-red-500 text-2xl' onClick={() => 
                togglewatchlist(movie)}>
                { inWatchList? <FaHeart /> : <FaRegHeart />}
            </button>
        </div>
    )
}

export default Moviecard


