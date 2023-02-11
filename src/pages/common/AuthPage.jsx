import React, { useState } from "react";
import { AlertDialogComponent } from "../../components/dialog";
import {
  LoginFormComponent,
  RegisterFormComponent,
} from "../../components/forms";
import { useAppSelector } from "../../redux/store";
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

  const notification = useAppSelector((state) => state.notify);

  const onSetOption = (e) => {
    const selectedId = e.target.getAttribute("item-id");
    if (selectedId === selected) {
      return;
    }

    setSelected(parseInt(selectedId));
  };

  const RenderForm = () => {
    switch (selected) {
      case 1:
        return <LoginFormComponent />;
      case 2:
        return <RegisterFormComponent />;

      default:
        break;
    }
  };

  const RenderNotification = () => {
    return (
      <AlertDialogComponent
        context={notification.message}
        alertColor={notification.type.toLowerCase()}
        title={notification.type}
      />
    );
  };

  return (
    <React.Fragment>
      {notification.hasNotify && <RenderNotification />}
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
              <RenderForm />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AuthPage;
