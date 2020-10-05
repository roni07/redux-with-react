import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureAppStore from "./store/configureAppStore";
import {Provider} from "react-redux";

import * as actions from "./store/apiAction";
import {movieAdded} from "./store/movie";
import {addUser, loadUsers} from "./store/users";

const store = configureAppStore();

// UI Layer
// store.dispatch(loadUsers());

const user = {
    status: "success",
    data: {
        name: "test",
        salary: "123",
        age: "23",
        id: 25
    }
}

// store.dispatch(addUser({user}));

store.dispatch(loadUsers());

const movie = {
    id: 12,
    name: "M2"
}

// store.dispatch(movieAdded({movie}));

// store.dispatch(movieUpdated({id: 12}));

// store.dispatch(movieRemoved({id: 12}));

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
