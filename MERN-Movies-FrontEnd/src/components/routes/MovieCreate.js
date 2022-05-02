import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../shared/Layout';
import MovieForm from '../shared/MovieForm';

function MovieCreate() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: '',
    link: '',
  })
  const [createdMovie, setCreatedMovie] = useState(null)

  const handleChange = (event) => {
    //created a placeholder grabbing the value from the user input form
    const updatedField = { [event.target.name] : event.target.value }
    //assigned the empty state with the updatedField into one object
    const editedMovie = Object.assign(movie, updatedField)
    //assigned the new object to be updated to the state
    setMovie(editedMovie)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()

    //if the entry is created in the database, save the response data
    // in the state
    axios({
      url: `http://localhost:3000/api/movies`,
      method: 'POST',
      data: movie
    }).then(res => setCreatedMovie(res.data.movie)).catch(console.error)

  }

  useEffect(() => {
    if (createdMovie) {
      return navigate(`/movies`)
    }
  }, [createdMovie, navigate])

  return (
    <Layout>
      <MovieForm
        Movie={movie}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath='/'
      />
    </Layout>

  )
}

export default MovieCreate