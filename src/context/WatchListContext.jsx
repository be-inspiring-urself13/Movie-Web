import { createContext, useState, useEffect } from "react"

export const WatchListContext = createContext();

 //useContext props small case 'c'
export const WatchListProvider = ({ children }) => {

    const [watchlist, setWatchlist] = useState([]);
    const [genreList, setGenreList] = useState([]);


    useEffect(() => {

        let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=53427836f04e8af4262ad913d07472e1`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => setGenreList(data.genres || []));
    }, [])

    const togglewatchlist = (movie) => {
        const index = watchlist.findIndex((m) => m.id === movie.id);

        if (index === -1) {
            setWatchlist([...watchlist, movie]);
        } else {
            setWatchlist([...watchlist.slice(0, index), ...watchlist.slice(index + 1)]);
        }
    }

    return (

        // `c` small letter children

        <WatchListContext.Provider value={{ watchlist, togglewatchlist, genreList }}>
            {children}
        </WatchListContext.Provider>
    )
}



