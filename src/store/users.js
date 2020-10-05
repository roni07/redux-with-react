import {createSlice} from "@reduxjs/toolkit";
import {apiCallBegan} from "./apiAction";

const userSlice = createSlice({
    name: "users",
    initialState: {
        list: [],
        loading: false
    },
    reducers: {
        usersRequested: (users, action) => {
            users.loading = true;
        },

        usersRequestFailed: (users, action) => {
            users.loading = false;
        },

        usersReceived: (users, action) => {
            users.list = action.payload.data;
            users.loading = false;
        },

        userAdded: (users, action) => {
            users.list.push(action.payload);
        }
    }
});

export const {usersReceived, usersRequested, usersRequestFailed, userAdded} = userSlice.actions;
export default userSlice.reducer;

// Action creator

export const loadUsers = () => apiCallBegan({
    url: "/employees",
    onStart: usersRequested.type,
    onSuccess: usersReceived.type,
    onError: usersRequestFailed.type
});

export const addUser = user => apiCallBegan({
    url: "/create",
    method: "post",
    data: user,
    onsuccess: userAdded.type
});
