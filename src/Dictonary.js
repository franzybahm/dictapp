import React, { useState } from 'react';
import './Dictonary.css'

export default function Dictonary() {
    let [input, setInput] = useState("");

    function search(event) {
        event.preventDefault();
        alert(input);
    }

    function handleInputChange(event) {
        setInput(event.target.value);
    }

    return (
        <div className="Dictonary">
            <form onSubmit={search}>
                <input type="search" onChange={handleInputChange} />
            </form>
        </div>
    )
}
