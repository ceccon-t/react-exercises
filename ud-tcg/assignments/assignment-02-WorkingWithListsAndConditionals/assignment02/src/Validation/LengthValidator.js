const SMALLEST_VALID = 5;
const MESSAGE_INVALID = "Text too short";
const MESSAGE_VALID = "Text long enough";

const isValid = (text) => {
    return text.length >= SMALLEST_VALID;
}

const generateMessage = (text) => {
    return isValid(text) ? MESSAGE_VALID : MESSAGE_INVALID;
}

const validator = {
    isValid,
    generateMessage
}

export default validator;