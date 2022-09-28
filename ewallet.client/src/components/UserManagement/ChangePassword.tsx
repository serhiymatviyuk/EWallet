import React from "react";
import "./UserManagement.css";

const ChangePassword = () => (
  <div className="change-user-name">
    <form>
      <div className="mb-3">
        <h1 className="display-5">Password</h1>
      </div>
      <div className="mb-3">
        <label>Old password</label>
        <input type="password" className="form-control" />
      </div>
      <div className="mb-3">
        <label>New password</label>
        <input type="password" className="form-control" />
      </div>

      <div className="mb-3">
        <label>Confirm password</label>
        <input type="password" className="form-control" />
      </div>

      <div className="d-grid gap-2">
        <input type="submit" className="btn btn-primary" value="Change" />
      </div>
    </form>
  </div>
);

export default ChangePassword;
