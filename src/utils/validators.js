export const required = (value) => (!value ? 'Required' : undefined);

export const requiredVC = (requiredFormName) => (value) => (!value ? `Fill in ${requiredFormName} field` : undefined); // VC - ValidatorCreator

export const maxLengthVC = (maxLength) => (value) => (value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined);