import * as React from "react";
import { Redirect, Route } from "react-router-dom";
import { ACCOUNT_SECURITY_URI } from "../../constants/routes.constants";

interface IProtectedRouteProps {
    component: React.ComponentType<any>;
    path: string;
    authenticated: boolean;
}

export const ProtectedRoute = (props: IProtectedRouteProps) => {

    return props.authenticated === true ?
        <Route path={`${props.path}`} component={props.component} /> :
        <Redirect from={`${props.path}`} to={ACCOUNT_SECURITY_URI} />
}