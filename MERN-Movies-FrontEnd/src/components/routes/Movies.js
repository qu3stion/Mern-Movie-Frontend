import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

function Movies() {
    const [movies, setMovies] = useState([])

const fetchData = async () => {
    try{
        const response = await axios('http://localhost:3000/api/movies')
        setMovies(response.data.movies)

    }catch (error){
        console.error(error)
    }
}

    useEffect(() => {
        fetchData()
    }, [])

    movies.map((item) => {
        return <li key={item._id}>
            <NavLink to={`/movies/${item._id}`}>{item.title}</NavLink>
        </li>
    })
    return (
        <div>
            
        </div>
    )
}

export default Movies