import React, { isValidElement } from 'react';
import './Validation.css'

const ValidationDisplay = (props) => {

    const CSS_CLASS_INVALID = "Invalid";
    const CSS_CLASS_VALID = "Valid";

    const value = props.text;
    const validator = props.validator;

    let generateCssClass = (isValid) => {
        return isValid ? CSS_CLASS_VALID : CSS_CLASS_INVALID ;
    }

    return (
        <div className="Validation">
            <p className={generateCssClass(validator.isValid(value))}>{validator.generateMessage(value)}</p>
        </div>
    );
}

export default ValidationDisplay;