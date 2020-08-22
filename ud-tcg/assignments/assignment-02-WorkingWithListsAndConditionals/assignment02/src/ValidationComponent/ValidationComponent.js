import React, { isValidElement } from 'react';
import './ValidationComponent.css'

const ValidationComponent = (props) => {

    const SMALLEST_VALID = 5;

    let value = props.textLength;

    let isValid = (length) => {
        return length > SMALLEST_VALID;
    }

    let generateValidationMessage = (length) => {
        let message = "Text long enough";
        if (!isValid(length)) {
            message = "Text too short";
        }
        return message;
    }

    let generateCssClass = (length) => {
        let cssClass = "Valid";
        if (!isValid(length)) {
            cssClass = "Invalid";
        }
        return cssClass;
    }

    return (
        <div className="ValidationComponent">
            <p className={generateCssClass(value)}>{generateValidationMessage(value)}</p>
        </div>
    );
}

export default ValidationComponent;