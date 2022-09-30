import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticationActions } from "../../reducers";
import "./LoginForm.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>('admin@mail.com');
  const [password, setPassword] = useState<string>('admiN@');

  const submitLogin = async (event: any) => {
    event.preventDefault();
    console.log('test');

    dispatch(authenticationActions.api_requestToken({ username: email, password: password }));
  }

  return (
    <div className="login-block">
      <form onSubmit={submitLogin}>
        <div className="mb-3">
          <h1 className="display-5">Login</h1>
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" value={email} className="form-control" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" value={password} className="form-control" onChange={(e) => setPassword(e.target.value)} />
        </div>
        {/*
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label">Remember me</label>
        </div>
        */}
        <div className="d-grid gap-2">
          <input type="submit" className="btn btn-primary" value="Login" />
        </div>
        <div className="mb-3">
          <a href="/recover" className="link-primary">
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
