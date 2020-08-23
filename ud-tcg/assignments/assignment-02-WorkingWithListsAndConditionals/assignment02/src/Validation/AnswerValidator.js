const ANSWER = '42';
const MESSAGE_INVALID = "Text does not contain the answer";
const MESSAGE_VALID = "Text contains the answer";

const isValid = (text) => {
    return text.includes(ANSWER);
}

const generateMessage = (text) => {
    return isValid(text) ? MESSAGE_VALID : MESSAGE_INVALID;
}

const validator = {
    isValid,
    generateMessage
}

export default validator;