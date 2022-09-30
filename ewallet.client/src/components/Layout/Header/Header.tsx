import React, { useEffect } from "react";
import "./Header.css";
import UserBlock from "./UserBlock";
import * as routes from "../../../constants/routes.constants";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { IApplicationState } from "../../../reducers";
import { globalActions } from "../../../reducers/globals.slice";
import { UserRole } from "../../../models/enums";
import { useAuth } from "../../../hooks/useAuth";

const Header = () => {
  const dispatch = useDispatch()
  const history = useHistory();

  const uriParams = history.location.pathname;

  useEffect(() => {
    dispatch(globalActions.selectUrl(uriParams))
  }, [uriParams]);

  const { role, email, firstName, lastName } = useAuth();


  const selectedMenuItemUrl = useSelector<IApplicationState, string>((state) => state.global.isSelectedUrl)

  const adminMenu = [
    { route: routes.ADMIN_USERS_URI, onClick: () => dispatch(globalActions.selectUrl(routes.ADMIN_USERS_URI)), name: "Users management" },
  ]

  const userMenu = [
    { route: routes.USER_ACCOUNTS_URI, onClick: () => dispatch(globalActions.selectUrl(routes.USER_ACCOUNTS_URI)), name: "Accounts" },
    { route: routes.USER_CARDS_URI, onClick: () => dispatch(globalActions.selectUrl(routes.USER_CARDS_URI)), name: "Cards" },
    { route: routes.USER_TRANSACTIONS_URI, onClick: () => dispatch(globalActions.selectUrl(routes.USER_TRANSACTIONS_URI)), name: "Transactions" },
    { route: routes.USER_PROFILE_URI, onClick: () => dispatch(globalActions.selectUrl(routes.USER_TRANSACTIONS_URI)), name: "Profile" },
  ]

  const getMenuItemClasses = (menuItem: any): string => {
    return selectedMenuItemUrl && selectedMenuItemUrl.indexOf(menuItem.route) !== -1 ? 'nav-link' : 'nav-link active'
  }

  const buildMenuByUserRole = (menuItems: Array<any>) => {
    return menuItems.map((menuItem, index) =>
      <li>
        <NavLink activeClassName="isActive" className={'nav-link'} to={`${menuItem.route}`}>{menuItem.name}</NavLink>
      </li>
    );
  }

  const renderMenuItems = (role: string) => {
    console.log(role);

    let menuItems = [...userMenu];

    switch (role) {
      case UserRole.Admin:
        menuItems = [
          ...menuItems,
          ...adminMenu
        ];
        break;
      default:
        break;
    }

    return buildMenuByUserRole(menuItems)
  }

  return (
    <>
      <div className="header_PAGE">
        <div className="header__LOGO">
          <a className="i__LOGO" href="/accounts">
            Account Management <b>System</b>
          </a>

          <div>
            <span>{email && email}</span>
            <br />
            {`${firstName && firstName} ${lastName && lastName}`}
          </div>
        </div>

        <ul className="menu__ITEMS">
          {renderMenuItems(role)}
        </ul>

        <div className="control__CONTENT">
          <UserBlock userName={`${firstName} ${lastName}`} email={email} />
        </div>
      </div>
    </>
  );
};

export default Header;
