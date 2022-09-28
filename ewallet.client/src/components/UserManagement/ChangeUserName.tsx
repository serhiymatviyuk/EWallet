import React from "react";
import "./UserManagement.css";

type ChangeUserNameProps = {
  username: string,
  email: string,
}

const ChangeUserName = (props: ChangeUserNameProps) => (
  <div className="change-user-name">
    <form>
      <div className="mb-3">
        <h1 className="display-5">Email / Username</h1>
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input type="email" className="form-control" value={props.email} />
      </div>
      <div className="mb-3">
        <label>username</label>
        <input type="text" className="form-control" value={props.username} />
      </div>
      <div className="d-grid gap-2">
        <input type="submit" className="btn btn-primary" value="Change" />
      </div>
    </form>
  </div>
);

export default ChangeUserName;
