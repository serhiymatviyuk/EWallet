import React from "react";
import Header from "../Layout/Header/Header";
import UsersTable from "../Administration/UsersTable";

const AdministrationPage = () => {
  return (
    <div>
      <div className="page">
        <Header />
        <h1
          className="display-4"
          style={{
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          Administration
        </h1>
      </div>
      <div className="users-block">
        <div className="box">
          <h1
            className="display-4"
            style={{
              margin: "10px",
            }}
          >
            Existing Users
          </h1>
          <div>
            <input
              type="button"
              value={"Create new"}
              className="btn btn-primary"
            />
          </div>
        </div>
        <UsersTable />
      </div>
    </div>
  );
};

export default AdministrationPage;
