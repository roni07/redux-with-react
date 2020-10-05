import {combineReducers} from "redux";
import movieReducer from "./movie";
import userReducer from "./users";

export default combineReducers({
    movie: movieReducer,
    user: userReducer
})
