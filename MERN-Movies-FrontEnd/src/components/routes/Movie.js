import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../shared/Layout'


function Movie() {
  const [movie, setMovie] = useState([])
  const [deleted, setDeleted] = useState(false)
  const { id } = useParams();
  let navigate = useNavigate();

  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`http://localhost:3000/api/movies/${id}`)
        console.log(response)
        const result = response.data.movie
    setMovie(result)
      
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [id])

  useEffect(() => {
    if (!movie) {
      return <p>Loading...</p>
    }
  }, [movie])

  const destroy = () => {
   axios({
      url: `http://localhost:3000/api/movies/${id}`,
      method: 'DELETE'
    }).then(() => setDeleted(true)).catch(console.error)
  }

  useEffect(() => {
    if (deleted) {
      return navigate("/")
    }
  }, [deleted, navigate])

  

  return (

    

    <Layout>

      <h4>{movie.title}</h4>
      <p>Link: {movie.link}</p>
      <button onClick={() => destroy()} >Delete Movie</button>

      <NavLink to={`/movies/${id}/edit`} >
        <button>Edit</button>
      </NavLink>

      <NavLink to="/movies" >Back to all Movies</NavLink>
      
    </Layout>
  )
}

export default Movie
