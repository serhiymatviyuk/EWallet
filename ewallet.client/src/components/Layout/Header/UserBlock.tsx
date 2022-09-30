import { Button, Menu } from "antd";
import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch } from "react-redux";
import { authenticationActions } from "../../../reducers";
import { LogoutOutlined, AppstoreOutlined } from '@ant-design/icons';

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
        <Button className="logOut__MenuItem" onClick={() => logOut()} icon={<LogoutOutlined />}>
            Log Out
        </Button >
        );
};

export default UserBlock;
