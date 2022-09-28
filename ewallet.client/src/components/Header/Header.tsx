import React from "react";
import "./Header.css";
import UserBlock from "./UserBlock";

const Header = () => {
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
              <li className="nav-item">
                <a className="nav-link active" href="/accounts">
                  Accounts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cards">
                  Cards
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/transactions">
                  Transactions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/administration">
                  Administration
                </a>
              </li>
              <UserBlock userName="Default User" />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
