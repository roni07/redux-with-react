import React, {Fragment, useState} from "react";

const AddMovie = () => {

    const [movie, setMovie] = useState({id: "", movieName: ""});

    const handleInput = e => {
        const {name, value} = e.target;
        setMovie({...movie, [name]: value})
    }

    const addMovie = e => {
        e.preventDefault();

        setMovie({id: "", movieName: ""});
    }

    return (
        <Fragment>
            <form onSubmit={addMovie}>
                <input type="text" name="id" value={movie.id} onChange={handleInput}/>
                <input type="text" name="movieName" value={movie.movieName} onChange={handleInput}/>
                <button>Submit</button>
            </form>

            {/*{
                movies.map(movie => <div key={movie.id}>
                    <p>{movie.id}</p>
                    <p>{movie.movieName}</p>
                </div>)
            }*/}
        </Fragment>
    );
}

export default AddMovie;
