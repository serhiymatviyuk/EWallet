import React from "react";
import UserManagementBlock from "../UserManagement/UserManagementBlock";

type UserManagementPageProps = {
  username: string,
  email: string,
}

const UserManagementPage = (props: UserManagementPageProps) => {
  return (
    <div>
      <div className="jumbotron">
        <h1
          className="display-4"
          style={{
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          Manage account <strong>{props.username}</strong>
        </h1>
      </div>
      <div>
        <UserManagementBlock username={props.username} email={props.email} />
      </div>
    </div>
  );
};

export default UserManagementPage;
