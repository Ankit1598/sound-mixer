import React from 'react';
import Playground from './Playground';
import "./index.css";

function index() {
    return (
        <div className="superContainer">
            <div className="container">
                <h1 className="text">Press a key on your Keyboard to see the Magic :)</h1>
            </div>
            <Playground/>
        </div>
    )
}

export default index
