import React from 'react'
import "./Result.css"

export default function Result(props) {
    if (props.data) {
        return (
            <div className="result">
                <h2>{props.results.word}</h2>
            </div>
        )
    }
    else {
        return null;
    }
}