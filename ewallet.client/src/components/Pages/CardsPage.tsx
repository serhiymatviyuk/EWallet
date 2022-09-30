import React from "react";
import Header from "../Layout/Header/Header";
import CardBlock from "../Card/CardBlock";

const CardsPage = () => (
  <>
    <Header />
    <h1
      className="display-4"
      style={{
        textAlign: "center",
        marginTop: "10px",
      }}
    >
      Cards
    </h1>
    <CardBlock
      cardNumber={"1234 56** **** **78"}
      valid={true}
      state={"Active"}
      type={"Currency USD"}
    />
    <CardBlock
      cardNumber={"1000 50** **** **08"}
      valid={false}
      state={"Inactive"}
      type={"Currency EUR"}
    />
    <CardBlock
      cardNumber={"9870 65** **** **43"}
      valid={false}
      state={"Expired"}
      type={"Credit"}
    />
  </>
);

export default CardsPage;
