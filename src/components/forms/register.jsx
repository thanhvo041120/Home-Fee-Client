import React, { useState } from "react";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineUser,
  AiOutlinePhone,
} from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { AuthApi } from "../../api/auth";
import { setNotify } from "../../redux/slices/notify.slice";
import { useAppDispatch } from "../../redux/store";
import {
  validateEmail,
  validatePassword,
  validatePhonenumber,
} from "../../utils/helper/helpers";
import { TextInputComponent } from "../inputs";
import "./register.style.css";
import "./style.css";

const Register = () => {
  const dispatch = useAppDispatch();
  const [registerInput, setRegisterInput] = useState({
    email: "",
    password: "",
    fullname: "",
    phonenumber: "",
  });
  const [viewPassword, setViewPassword] = useState(false);

  const onSetViewPassword = () => {
    setViewPassword((prev) => !prev);
  };

  const onChangeInput = (field, value) => {
    switch (field) {
      case "email":
        setRegisterInput((prev) => ({
          ...prev,
          email: value,
        }));
        break;
      case "password":
        setRegisterInput((prev) => ({
          ...prev,
          password: value,
        }));
        break;

      case "fullname":
        setRegisterInput((prev) => ({
          ...prev,
          fullname: value,
        }));
        break;
      case "phonenumber":
        setRegisterInput((prev) => ({
          ...prev,
          phonenumber: value,
        }));
        break;
      default:
        break;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(registerInput.email)) {
      dispatch(
        setNotify({
          type: "Warning",
          message: "Email is invalid",
          hasNotify: true,
        })
      );
      return;
    }

    if (!validatePassword(registerInput.password)) {
      dispatch(
        setNotify({
          type: "Warning",
          message: "Password is invalid",
          hasNotify: true,
        })
      );
      return;
    }

    if (!validatePhonenumber(registerInput.phonenumber)) {
      dispatch(
        setNotify({
          type: "Warning",
          message: "Phonenumber is invalid",
          hasNotify: true,
        })
      );
      return;
    }
    const auth = new AuthApi();
    const response = await auth.register(registerInput);
    if (response.status === 400) {
      dispatch(
        setNotify({
          type: "Error",
          message: response.message,
          hasNotify: true,
        })
      );
    }
    if(response.status === 201 ){
      dispatch(
        setNotify({
          type: "Success",
          message: "Your account is registered successfully",
          hasNotify: true,
        })
      );
    }
  };
  return (
    <div className="register-form-container">
      <div className="register-form-row">
        <AiOutlineUser className="register-icon" />
        <div className="register-box">
          <TextInputComponent
            id={"fullname"}
            placeholder={"Fullname"}
            type={"text"}
            isRequire={true}
            onChangeInput={onChangeInput}
            typeClass={"form-input-box-none-border form-input-box"}
          />
        </div>
      </div>

      <div className="register-form-row">
        <MdAlternateEmail className="register-icon" />
        <div className="register-box">
          <TextInputComponent
            id={"email"}
            placeholder={"Email"}
            type={"text"}
            isRequire={true}
            onChangeInput={onChangeInput}
            typeClass={"form-input-box-none-border form-input-box"}
          />
        </div>
      </div>

      <div className="register-form-row">
        <RiLockPasswordLine className="register-icon" />
        <div className="register-box">
          {viewPassword ? (
            <TextInputComponent
              id={"password"}
              placeholder={"Password"}
              type={"text"}
              isRequire={true}
              onChangeInput={onChangeInput}
              typeClass={"form-input-box-none-border form-input-box"}
            />
          ) : (
            <TextInputComponent
              id={"password"}
              placeholder={"Password"}
              type={"password"}
              isRequire={true}
              onChangeInput={onChangeInput}
              typeClass={"form-input-box-none-border form-input-box"}
            />
          )}

          <div onClick={onSetViewPassword}>
            {viewPassword ? (
              <AiFillEyeInvisible className="visible-icon" />
            ) : (
              <AiFillEye className="visible-icon" />
            )}
          </div>
        </div>
      </div>

      <div className="register-form-row">
        <AiOutlinePhone className="register-icon" />
        <div className="register-box">
          <TextInputComponent
            id={"phonenumber"}
            placeholder={"Phone-number"}
            type={"tel"}
            isRequire={true}
            onChangeInput={onChangeInput}
            typeClass={"form-input-box-none-border form-input-box"}
          />
        </div>
      </div>

      <div className="register-form-row">
        <button className="login-form-button" onClick={onSubmit}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
