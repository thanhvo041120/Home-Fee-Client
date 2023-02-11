import jwt_decode from "jwt-decode";
export const validateEmail = (input) => {
  const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
  );
  return emailRegex.test(input);
};

export const validatePhonenumber = (input) => {
  const phonenumberRegex = new RegExp(
    /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
  );
  return phonenumberRegex.test(input);
};

export const validatePassword = (input) => {
  if(input.length < 8){
    return false;
  }
  return true;
}

export const decodeAccessToken = (token) => {
  const decodedValue = jwt_decode(token);
  return decodedValue;
};
