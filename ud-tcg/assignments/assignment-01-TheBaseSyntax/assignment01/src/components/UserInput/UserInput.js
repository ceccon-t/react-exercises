import React from 'react';

const UserInput = ( props ) => {
    return(
        <input onChange={ props.inputChangeHandler } value={ props.username }></input>
    );
}

export default UserInput;