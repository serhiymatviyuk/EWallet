import React from "react";
import { CardState, CardType } from "../../models/enums";
import "./CardBlock.css";

type CardBlockProps = {
  cardNumber: string,
  valid: boolean,
  state?: CardState,
  type?: CardType,
};

const CardBlock = (props: CardBlockProps) => {
  function setStateColor(state?: string) {
    if (state === "Expired") return "red";
    if (state === "Active") return "green";
    else return "gray";
  }

  const stateColor = setStateColor(props.state);
  return (
    <div className="account-block">
      <div className="container">
        <div className="box">
          <div className="header">
            <h1 className="display-6">Card Number</h1>
          </div>
          <div className="value">
            <h1 className="display-6">
              <strong>{props.cardNumber}</strong>
            </h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box">
          <div className="header">
            <h1 className="display-6">Valid:</h1>
          </div>
          <div className="value">
            <h1 className="display-6">{props.valid ? "False" : "True"}</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box">
          <div className="header">
            <h1 className="display-6">State:</h1>
          </div>
          <div className="value">
            <h1
              className="display-6"
              style={{
                color: stateColor,
              }}
            >
              <strong>{props.state}</strong>
            </h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box">
          <div className="header">
            <h1 className="display-6">Type:</h1>
          </div>
          <div className="value">
            <h1 className="display-6">{props.type}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlock;
