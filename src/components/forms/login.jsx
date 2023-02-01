import React, { useEffect, useState } from "react";
import { TextInputComponent } from "../inputs";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./style.css";
import { decodeAccessToken, validateEmail } from "../../utils/helper/helpers";
import { AuthApi } from "../../api/auth";
import { useAppDispatch } from "../../redux/store";
import { login } from "../../redux/slices/user.slice";

const Login = () => {
  const dispatch = useAppDispatch();
  const [viewPassword, setViewPassword] = useState(false);
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");



  const onSetViewPassword = () => {
    setViewPassword((prev) => !prev);
  };

  const onChangeInput = (field, value) => {
    switch (field) {
      case "email":
        setLoginInput((prev) => ({
          ...prev,
          email: value,
        }));
        break;
      case "password":
        setLoginInput((prev) => ({
          ...prev,
          password: value,
        }));
        break;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(loginInput.email)) {
      setError("Email is invalid");
      return;
    }
    const auth = new AuthApi();
    const response = await auth.login(loginInput);
    if (response.status === 201) {
      localStorage.setItem("access_token", response.accessToken);
      localStorage.setItem("refresh_token", response.refreshToken);
      const decodedData = decodeAccessToken(response.accessToken);
      dispatch(
        login({
          email: decodedData.email,
          id: decodedData.id,
          isLogin: true,
        })
      );
    }
  };



  
  useEffect(() => {
    const listenEnterEvent = (e) => {
      if (e.code === "Enter" || e.code === "NumpadEnter") {
        e.preventDefault();
        onSubmit(e);
      }
    };
    document.addEventListener("keydown", listenEnterEvent);
    return () => {
      document.removeEventListener("keydown", listenEnterEvent);
    };
  }, []);
  return (
    <div className="login-form-container">
      <div className="login-form-row">
        <MdAlternateEmail className="login-icon" />
        <div className="login-box">
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

      <div className="login-form-row">
        <RiLockPasswordLine className="login-icon" />
        <div className="login-box">
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

      <div className="login-form-row">
        <button className="login-form-button" onClick={onSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
