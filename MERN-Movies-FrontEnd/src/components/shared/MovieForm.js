import { Link } from "react-router-dom"
const MovieForm = ({movie, handleSubmit, handleChange, cancelPath}) => {
    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Title</label>
            <input
            placeholder="item to input"
            defaultValue={movie.title}
            name="title"
            onChange={(e) => handleChange(e)} />

            <input
            placeholder="http://coolstuff.io"
            defaultValue={movie.link}
            name="link"
            onChange={(e) => handleChange(e)} />

            <button type="submit">Submit</button>

            <Link to={cancelPath}>
                <button>Cancel</button>
            </Link>

        </form>
    )
}
export default MovieForm