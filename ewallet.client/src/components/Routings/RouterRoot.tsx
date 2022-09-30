import { Redirect, Route, Switch } from "react-router-dom";
import * as routes from "../../constants/routes.constants";
import { ProtectedRoute } from "./ProtectedRoute";
import MasterPageView from "../Layout/MasterPage";
import LoginPage from "../Pages/LoginPage";
import { useAuth } from "../../hooks/useAuth";

interface IRouting {
    onEnter: void;
    path: string
}

const RouterRoot = (props: IRouting) => {

    const { isAuthorized } = useAuth();

    if (isAuthorized) {
        return (
            <Switch>
                <Redirect exact={true} from={'/'} to={`${routes.APP_URI}`} />
                <ProtectedRoute
                    path={`${routes.APP_URI}`}
                    authenticated={isAuthorized}
                    component={MasterPageView}
                />
            </Switch>
        )
    }
    else {
        return (
            <>
                <Switch>
                    <Redirect
                        exact={true}
                        from={'/'}
                        to={`${routes.ACCOUNT_SECURITY_URI}`} />
                    <Route path={`${routes.ACCOUNT_SECURITY_URI}`} component={LoginPage} />
                    <Redirect from="*" to="/" />
                </Switch>
            </>
        )
    }
}

export default RouterRoot;