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
  const dispatch = useDispatch();
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
      <li className={getMenuItemClasses(menuItem)} key={`menu-item-${index}`}>
        <NavLink className={'nav-link'} to={`${menuItem.route}`}>{menuItem.name}</NavLink>
      </li>
    );
  }

  const renderMenuItems = (role: string) => {
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
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/accounts">
            Account Management System
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Переключатель навигации"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {renderMenuItems(role)}

              <UserBlock userName={`${firstName} ${lastName}`} email={email} />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
