import React, { useState } from 'react';
import axios from 'axios';
import './Dictonary.css'

import Result from "./Result.js"

export default function Dictonary() {
    let [input, setInput] = useState("");
    let [def, setDef] = useState(null);

    function handleResponse(response) {
        setDef(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
        axios.get(apiUrl).then(handleResponse);
    }

    function handleInputChange(event) {
        setInput(event.target.value);
    }

    return (
        <div className="Dictonary">
            <form onSubmit={search}>
                <input type="search" onChange={handleInputChange} />
            </form>
            <Result data={def} />
        </div>
    )
}
