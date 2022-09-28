import React from "react";
import AccountBlock from "../Account/AccountBlock";
import Header from "../Header/Header";

const AccountsPage = () => (
  <>
    <Header />
    <h1
      className="display-4"
      style={{
        textAlign: "center",
        marginTop: "10px",
      }}
    >
      Accounts
    </h1>
    <AccountBlock balance={10000} type={"Currency"} />
    <AccountBlock balance={566655} type={"Deposit"} />
  </>
);

export default AccountsPage;
