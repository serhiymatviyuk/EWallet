import { Button } from "antd";
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
        dispatch(authenticationActions.api_requestToken({ username: email, password: password }));
    }

    return (
        <>
            <div className="component__SignIn_VIEW">
                <div className="view__WRAPPER">

                    <div className="view__CONTENT">
                        <h2>Log in to your account</h2>

                        <form onSubmit={submitLogin}>
                            <div className="input__CONTROL full_w">
                                <label className="input__TITLE">Email</label>
                                <input type="email" value={email} className="ant-input ant-input-lg" onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="input__CONTROL full_w">
                                <label className="input__TITLE">Password</label>
                                <input type="password" value={password} className="ant-input ant-input-lg" onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div className="button__CONTAINER">
                                <Button size={"large"} type="primary" htmlType="submit" className="signin__button">
                                    Sign In
                                </Button>
                            </div>
                        </form>

                        <div className="contactWrapper">
                            <a href="/recover" className="link-primary">
                                <p> Forgot password?</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
