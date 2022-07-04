// export const isValidEmail = (value) => {
//   const regexp = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
//   const isValid = value.match(regexp);
//   return isValid;
// };

const isValidId = (value) => {
  console.log(value);
};

const isValidPassword = (value) => {
  const regexp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?^()_+~])[A-Za-z\d#$@!%&*?^()_+~]{6,}$/;
  const isValid = value.match(regexp);
  return isValid; // the value is either truthy (array) or falsy (null). It's not 'true' or 'false' itself
};

export { isValidPassword, isValidId };
