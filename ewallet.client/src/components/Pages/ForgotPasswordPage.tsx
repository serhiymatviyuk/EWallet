import React, { SyntheticEvent, useState } from "react";

const ForgotPasswordPage = () => {
  function RecoverSubmit(event: SyntheticEvent<any>) {
    event?.preventDefault();
    setCodeStatus(true);
  }

  function ChangePasswordSubmit(event: SyntheticEvent<any>) {
    event?.preventDefault();
    setChangePasswordStatus(true);
  }

  function HandleChange(event: any) {
    setEmail(event.target.value);
  }

  const [codeStatus, setCodeStatus] = useState(false);
  const [changePasswordStatus, setChangePasswordStatus] = useState(false);
  const [email, setEmail] = useState("");

  if (!codeStatus) {
    return (
      <div>
        <div className="login-block">
          <form onSubmit={RecoverSubmit}>
            <div className="mb-3">
              <h1 className="display-5">Password Recovery</h1>
            </div>
            <div className="mb-3">
              <label>Type your registration email</label>
              <input
                type="email"
                className="form-control"
                onChange={HandleChange}
              />
            </div>
            <div className="d-grid gap-2">
              <input
                type="submit"
                className="btn btn-primary"
                value="Send code"
              />
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    if (!changePasswordStatus) {
      return (
        <div className="login-block">
          <form onSubmit={ChangePasswordSubmit}>
            <div className="mb-3">
              <h1 className="display-5">Enter your code</h1>
            </div>
            <div className="mb-3">
              <label>
                We send six-digit code on your email <strong>{email}</strong>
              </label>
              <input type="password" className="form-control" />
            </div>
            <div className="d-grid gap-2">
              <input
                type="submit"
                className="btn btn-primary"
                value="Change password"
              />
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="login-block">
          <form>
            <div className="mb-3">
              <h1 className="display-5">New password</h1>
            </div>
            <div className="mb-3">
              <label>Type new password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="mb-3">
              <label>Retype new password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="d-grid gap-2">
              <input
                type="submit"
                className="btn btn-primary"
                value="Change password"
              />
            </div>
          </form>
        </div>
      );
    }
  }
};

export default ForgotPasswordPage;
