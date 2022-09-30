import React from "react";
import "./CardBlock.css";

const NoCardBlock = () => {
  return (
    <div className="account-block">
      <div className="container">
        <div className="box">
          <div className="header">
            <h1 className="display-12">No cards</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoCardBlock;
