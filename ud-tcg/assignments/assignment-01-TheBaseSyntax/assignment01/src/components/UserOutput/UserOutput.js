import React from 'react';
import './UserOutput.css';

const UserOutput = ( props ) => {
    return(
        <div className="UserOutput-wrapper" style={ {'border': '1px solid black', 'margin': '5px'} }>
            <h3 className="UserOutput-username">{props.username}</h3>
            <p>First user output paragraph.</p>
            <p>Second user output paragraph.</p>
        </div>
    );
}

export default UserOutput;