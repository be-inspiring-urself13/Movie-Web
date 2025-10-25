//App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import WatchList from './pages/WatchList'
import Navbar from './pages/Navbar'
import { WatchListProvider } from './context/WatchListContext'
import MovieDetails from './pages/MovieDetails'
function App() {

  return (
    <WatchListProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/watchlist' element={<WatchList />} />
          <Route path='/movie/:id' element={<MovieDetails />}/>
        </Routes>
      </BrowserRouter>
    </WatchListProvider>



  )
}

export default App
