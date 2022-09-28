import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import AuthenticationService from "../../services/AuthenticationService";
import "./LoginForm.css";

const LoginForm = () => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const SubmitLogin = async (event: any) => {
    event.preventDefault();
    console.log('test');

    const result = await AuthenticationService.login(email, password);
    
    if (!result.error) {
      <Navigate to="/accounts" />;
    }
  }

  return (
    <div className="login-block">
      <form onSubmit={SubmitLogin}>
        <div className="mb-3">
          <h1 className="display-5">Login</h1>
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label">Remember me</label>
        </div>
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
