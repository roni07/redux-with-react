import reducer from "./reducer";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import api from "./middlewar.js/api";

export default function configureAppStore() {
    return configureStore({
        reducer,
        middleware: [
            ...getDefaultMiddleware(),
            api
        ]
    });
}
