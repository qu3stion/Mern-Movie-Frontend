import { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router'
import Layout from '../shared/Layout'
import MovieForm from '../shared/MovieForm'
import axios from 'axios'

function MovieEdit() {
    const navigate = useNavigate()
    const {id} = useParams() // extracting the id from the object of whatever url page im in
    const [movie, setMovie] = useState({
        title:"",
        link:""
    })
// check if its updated
    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios(`http://loalhost:3000/api/movies/${id}`)
                console.log('edit', response)
                setMovie(response.data)

            }catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [id])

    const handleChange = (event) => {
    // grab the value from the user input
    const updatedField = {[event.target.name] : event.target.value}
    //assign the empty state with the updated field into one object
    const editedMovie = Object.assign(movie, updatedField)
    //assign the new object to be updated to state
    setMovie(editedMovie)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        axios({
            url: `http://localhost:3000/api/Movies/${id}`,
            method: 'PUT',
            data: movie
        }).then(() => setUpdated(true)).catch(console.error)
    }

    useEffect(() => {
        if (updated) {
            return navigate(`/Movies/${id}`)
        }
    })

    return (
        <Layout>
            <MovieForm
            Movie= {movie}
            handleChange={(e) => handleChange(e)}
            handleSubmit={(e) => handleSubmit(e)}
            cancelPath={`/Movies/${id}`}
            
            />
        </Layout>
    )


}

export default MovieEdit