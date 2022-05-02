import {Routes, Route, useLocation} from 'react-router-dom'
import './App.css';
import Home from './components/routes/Home'
import Movie from './components/routes/Movie';
import MovieCreate from './components/routes/MovieCreate';
import Movies from './components/routes/Movies';
import MovieEdit from './components/routes/MovieEdit'; 

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <h3>{location.state ? location.state.msg: null }</h3>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Movies' element={<Movies />} />
        <Route path='/create-Movie' element={<MovieCreate />} />
        <Route path='/Movie/:id' element={<Movie />} />
        <Route path='/Movie/:id/edit' element={<MovieEdit />} />
      </Routes>
      
    </div>
  );
}

export default App;
