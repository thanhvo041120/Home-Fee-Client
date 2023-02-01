import React, { useState } from "react";
import { useEffect } from "react";
import { LoginFormComponent } from "../../components/forms";
import "./style.css";

const AuthPage = () => {
  const optionsData = [
    {
      id: 1,
      text: "Login",
      path: "/login",
      class: "auth-form-option",
    },
    {
      id: 2,
      text: "Register",
      path: "/register",
      class: "auth-form-option",
    },
    {
      id: 3,
      text: "Forget Password",
      path: "/forget",
      class: "auth-form-option",
    },
  ];
  const [selected, setSelected] = useState(1);
  const onSetOption = (e) => {
    const selectedId = e.target.getAttribute("item-id");
    if (selectedId === selected) {
      return;
    }

    setSelected(parseInt(selectedId));
  };

  useEffect(() => {}, [selected]);

  return (
    <React.Fragment>
      <div className="auth-page-container">
        <div className="auth-page-title">
          <p className="auth-page-title-black">Authent</p>
          <p className="auth-page-title-white">ication</p>
        </div>
        <div className="auth-form-container">
          <div className="auth-form-row">
            <div className="auth-form-options">
              {optionsData.map((item) => {
                if (item.id === selected) {
                  return (
                    <div
                      key={item.id}
                      className="auth-form-option-selected"
                      onClick={onSetOption}
                    >
                      <p
                        item-id={item.id}
                        className="auth-form-option-text-selected"
                      >
                        {item.text}
                      </p>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={item.id}
                      className={item.class}
                      onClick={onSetOption}
                    >
                      <p item-id={item.id} className="auth-form-option-text">
                        {item.text}
                      </p>
                    </div>
                  );
                }
              })}
            </div>
            <div className="auth-form-content">
              <LoginFormComponent />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AuthPage;
