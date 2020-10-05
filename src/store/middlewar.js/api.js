import axios from "axios";
import * as actions from "../apiAction";

const api = ({dispatch}) => next => async action => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const {url, data, method, onStart, onSuccess, onError} = action.payload;

    if (onStart) dispatch({type: onStart});

    next(action);

    try {
        const response = await axios.request({
            baseURL: "http://dummy.restapiexample.com/api/v1",
            url,
            method,
            data
        });
        // General
        dispatch(actions.apiCallSuccess(response.data));
        // Specific
        if (onSuccess)
            dispatch({type: onSuccess, payload: response.data});
    } catch (error) {
        // General
        dispatch(actions.apiCallFailed(error.message));
        if (onError)
            dispatch({type: onError, payload: error.message});
    }
};

export default api;
