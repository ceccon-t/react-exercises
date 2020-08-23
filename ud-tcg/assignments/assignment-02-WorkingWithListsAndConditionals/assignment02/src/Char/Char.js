import React from 'react';
import './Char.css';

const Char = (props) => {
    return (
        <div className="Char" onClick={props.clicked}>
            <p>{props.char}</p>
        </div>
    );
}

export default Char;