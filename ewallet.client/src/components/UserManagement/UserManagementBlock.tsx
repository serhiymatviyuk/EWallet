import React from "react";
import ChangePassword from "./ChangePassword";
import ChangeUserName from "./ChangeUserName";
import "./UserManagement.css";

type UserManagementBlockProps = {
  username: string,
  email: string,
}

const UserManagementBlock = (props: UserManagementBlockProps) => {
  return (
    <div>
      <div className="management-block">
        <div className="management-sub-block">
          <ChangeUserName username={props.username} email={props.email} />
        </div>
        <div className="management-sub-block">
          <ChangePassword />
        </div>
      </div>
    </div>
  );
};

export default UserManagementBlock;
