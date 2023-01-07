import React from "react";
import "./style.css";

const AuthPage = () => {
  return (
    <React.Fragment>
      <div className="auth-page-container">
        <div className="auth-page-title">
          Authentication
        </div>
        <div className="auth-form-container">
          <div className="auth-form-row">
            <div className="auth-form-options">
              <div className="auth-form-option">
                Login
              </div>
              <div className="auth-form-option">
                Register
              </div>
              <div className="auth-form-option">
                Forget Password
              </div>
            </div>
            <div className="auth-form-content">
              
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AuthPage;
