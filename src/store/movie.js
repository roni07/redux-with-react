import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: [],
    reducers: {
        movieAdded: (movies, action) => {
            movies.push(action.payload);
        },

        movieRemoved: (movies, action) => {
            const index = movies.indexOf(movie => movie.id === action.payload.id);
            movies.splice(index, 1);
        },

        movieUpdated: (movies, action) => {
            movies.map(movie => movie.id === action.payload.id ? movie.name = "M3" : movie);
        }
    }
});

export const {movieAdded, movieRemoved, movieUpdated} = movieSlice.actions;
export default movieSlice.reducer;
