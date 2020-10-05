import React from "react";
import {useSelector} from "react-redux";

const Nav = () => {

    const amount = useSelector(state => state.entities.user.list.length);

    const loading = useSelector(state => state.entities.user.loading);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            background: 'orange'
        }}>
            <h1>Hi there</h1>
            <h1>List: {loading ? "Loading..." : amount}</h1>
        </div>
    );
}

export default Nav;
