import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";

type UserBlockProps = {
  userName: string,
}

const UserBlock = (props: UserBlockProps) => (
  <NavDropdown title={props.userName}  menuRole="navbar" menuVariant="navbar" id="dropdown-light">
    <NavDropdown.Item href="/edit">Edit</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="/login">Log out</NavDropdown.Item>
  </NavDropdown>
);

export default UserBlock;
