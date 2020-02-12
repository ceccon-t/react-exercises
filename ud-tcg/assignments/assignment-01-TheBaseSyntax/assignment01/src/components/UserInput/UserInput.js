import React from 'react';
import './UserInput.css';

const UserInput = ( props ) => {
    return(
        <div className="UserInput-wrapper">
            <input className="UserInput-input" onChange={ props.inputChangeHandler } value={ props.username }></input>
        </div>
    );
}

export default UserInput;