import React from "react";
import Header from "../Layout/Header/Header";
import TransactionBlock from "../Transaction/TransactionBlock";

const TransactionPage = () => (
  <>
    <div className="page">
      <Header />
      <h1
        className="display-4"
        style={{
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        Transactions
      </h1>
    </div>
    <div className="container">
      <div className="box">
        <TransactionBlock
          date={"09-28-2022"}
          ammount={1146}
          type={true}
          cardNumber={"1234 56** **** **89"}
          vendor={"Vise"}
        />
        <TransactionBlock
          date={"08-31-2022"}
          ammount={10340}
          type={false}
          cardNumber={"1234 56** **** **89"}
          vendor={"Vise"}
        />
        <TransactionBlock
          date={"09-04-2021"}
          ammount={10000}
          type={true}
          cardNumber={"1234 56** **** **89"}
          vendor={"Vise"}
        />
      </div>
    </div>
  </>
);

export default TransactionPage;
