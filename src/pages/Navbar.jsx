// Navbar.jsx
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WatchListContext } from '../context/WatchListContext';

function Navbar() {
  const { watchlist } = useContext(WatchListContext);

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center fixed w-full top-0 z-10">
      {/* CineWave Title with gradient + glow hover */}
      <Link
        to="/"
        className="
          text-2xl md:text-3xl font-bold 
          bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600
          bg-clip-text text-transparent
          transition-all duration-300
          hover:shadow-[0_0_10px_rgb(251,146,60),0_0_20px_rgb(236,9,121),0_0_30px_rgb(142,45,226)]
        "
      >
        CineWave ✨
      </Link>

      {/* Dynamic Watchlist link */}
      <Link
        to="/watchlist"
        className="text-xl hover:text-orange-400 font-bold transition-colors duration-300"
      >
        Watchlist ({watchlist.length})
      </Link>
    </nav>
  );
}

export default Navbar;
