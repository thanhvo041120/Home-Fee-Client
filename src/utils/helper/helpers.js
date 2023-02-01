import jwt_decode from "jwt-decode";
export const validateEmail = (input) => {
  const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
  );
  return emailRegex.test(input);
};

export const decodeAccessToken = (token) => {
  const decodedValue = jwt_decode(token);
  return decodedValue;
}