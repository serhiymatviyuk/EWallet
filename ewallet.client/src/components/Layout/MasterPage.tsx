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
                {/* <MenuComponent /> */}

                <Switch>
                    <Redirect
                        exact={true}
                        from={routes.APP_URI}
                        to={authenticationUser.role === UserRole.Admin ? routes.ADMIN_USERS_URI : routes.USER_ACCOUNTS_URI} />

                    {selectRoutes(authenticationUser.role)}
                </Switch>

                {/* <Footer /> */}
            </div>

            {/* <Panel
                customWidth={'560px'}
                isOpen={isOpenMenu}
                closeButtonAriaLabel="Close"
                className="component__PANEL"
                type={PanelType.custom}
                headerClassName='hide'
                hasCloseButton={false}
                isLightDismiss={true}
                isHiddenOnDismiss={true}
                onOuterClick={() => { }}
                onDismiss={() => { dispatch(controlActions.closeMenu()) }}
            >
            </Panel> */}

            {/* <Panel
                customWidth={'1060px'}
                isOpen={isRView}
                closeButtonAriaLabel="Close"
                className="component__PANEL"
                type={PanelType.custom}
                headerClassName='hide2'
                hasCloseButton={true}
                isLightDismiss={true}
                isHiddenOnDismiss={true}
                onOuterClick={() => { }}
                onDismiss={() => { dispatch(controlActions.closeRightView()) }}
            >
                {modelRVContent}
            </Panel> */}

            {/* <Modal
                containerClassName={'modal__CONTAINER'}
                scrollableContentClassName="scrollableModalContent"
                isOpen={isOpenModal}
                onDismiss={() => { dispatch(controlActions.closeModal()) }}
            >
                {modelContent}
            </Modal> */}

        </>
    )
}
export default MasterPage;
