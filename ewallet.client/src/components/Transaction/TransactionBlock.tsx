import React from "react";
import "./Transaction.css";

type TransactionBlockProps = {
  date: string,
  ammount: number,
  type: boolean,
  cardNumber: string,
  vendor: string,
};

const TransactionBlock = (props: TransactionBlockProps) => {
  const formColor = props.type ? "#82ff82" : "#fc5b75";

  return (
    <div
      className="transaction-block"
      style={{
        backgroundColor: formColor,
      }}
    >
      <div className="container">
        <div className="box">
          <div>
            <h4>Date</h4>
          </div>
          <h4>{props.date}</h4>
        </div>
      </div>

      <div className="container">
        <div className="box">
          <div>
            <h4>Ammount</h4>
          </div>
          <h4>{props.ammount}$</h4>
        </div>
      </div>

      <div className="container">
        <div className="box">
          <div>
            <h4>Type</h4>
          </div>
          <h4>{props.type ? "Normal" : "Canceled"}</h4>
        </div>
      </div>

      <div className="container">
        <div className="box">
          <div>
            <h4>Card number</h4>
          </div>
          <h4>{props.cardNumber}</h4>
        </div>
      </div>

      <div className="container">
        <div className="box">
          <div>
            <h4>Vendor</h4>
          </div>
          <h4>{props.vendor}</h4>
        </div>
      </div>
    </div>
  );
};

export default TransactionBlock;
