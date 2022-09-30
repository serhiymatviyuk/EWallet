import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch } from "react-redux";
import { authenticationActions } from "../../../reducers";

type UserBlockProps = {
  userName: string,
  email: string,
}

const UserBlock = (props: UserBlockProps) => {
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(authenticationActions.logoutSuccess());
  }

  return (
    <NavDropdown title={props.userName} menuRole="navbar" menuVariant="navbar" id="dropdown-light">
      <NavDropdown.Item>{props.email}</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item onClick={() => logOut()}>Log out</NavDropdown.Item>
    </NavDropdown>
  )
};

export default UserBlock;
