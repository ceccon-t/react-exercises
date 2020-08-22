import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {
    return (
        <div className="CharComponent" onClick={props.clicked}>
            <span>{props.char}</span>
        </div>
    );
}

export default CharComponent;