import React from 'react';

const UserOutput = ( props ) => {
    return(
        <div style={ {'border': '1px solid black', 'margin': '5px'} }>
            <h3>{props.username}</h3>
            <p>First user output paragraph.</p>
            <p>Second user output paragraph.</p>
        </div>
    );
}

export default UserOutput;