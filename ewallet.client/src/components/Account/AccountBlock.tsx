import React from "react";
import "./AccountBlock.css";

type AccountBlockProps = {
  balance: number,
  type: string,
};

const AccountBlock = (props: AccountBlockProps) => {
  return (
    <div className="account-block">
      <div className="container">
        <div className="box">
          <div className="header">
            <h1 className="display-6">Balance:</h1>
          </div>
          <div className="value">
            <h1
              className="display-5"
              style={{
                color: "green",
              }}
            >
              <strong>{props.balance}$</strong>
            </h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box">
          <div className="header">
            <h1 className="display-5">Type:</h1>
          </div>
          <div className="value">
            <h1 className="display-6">
              <strong>{props.type}</strong>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountBlock;
