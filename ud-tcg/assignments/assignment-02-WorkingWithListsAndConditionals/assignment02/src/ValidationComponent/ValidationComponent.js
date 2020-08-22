import React, { isValidElement } from 'react';
import './ValidationComponent.css'

const ValidationComponent = (props) => {

    const SMALLEST_VALID = 5;
    const MESSAGE_INVALID = "Text too short";
    const CSS_CLASS_INVALID = "Invalid";
    const MESSAGE_VALID = "Text long enough";
    const CSS_CLASS_VALID = "Valid";

    let value = props.textLength;

    let isValid = (length) => {
        return length >= SMALLEST_VALID;
    }

    let generateValidationMessage = (length) => {
        let message = MESSAGE_VALID;
        if (!isValid(length)) {
            message = MESSAGE_INVALID;
        }
        return message;
    }

    let generateCssClass = (length) => {
        let cssClass = CSS_CLASS_VALID;
        if (!isValid(length)) {
            cssClass = CSS_CLASS_INVALID;
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