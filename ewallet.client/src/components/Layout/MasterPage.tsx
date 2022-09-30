import React from 'react';
import { Switch, Redirect } from 'react-router';
import * as routes from "../../constants/routes.constants";
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../../reducers/application.state';
import { IAuthState } from '../../reducers';
import Header from './Header/Header';
import { UserRole } from '../../models/enums/UserRole';
import { AdminRoute, UserRoute } from '../Routings/Routes';

const MasterPage = () => {
    const dispatch = useDispatch();

    const authenticationUser = useSelector<IApplicationState, IAuthState>((state) => state.authentication)

    const selectRoutes = (role: UserRole) => {
        switch (role) {
            case UserRole.Admin:
                return AdminRoute()
            case UserRole.User:
                return UserRoute()
            default:
                break;
        }
    }

    return (
        <>
            <div className={`component__MasterPage_VIEW`}>
                <Header />

                <Switch>
                    <Redirect
                        exact={true}
                        from={routes.APP_URI}
                        to={routes.USER_ACCOUNTS_URI} />

                    {selectRoutes(authenticationUser.role)}
                </Switch>
            </div>
        </>
    )
}
export default MasterPage;
