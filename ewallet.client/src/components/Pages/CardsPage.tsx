import React, { useEffect, useState } from "react";
import CardBlock from "../Card/CardBlock";
import { useDispatch, useSelector } from "react-redux";
import { IApplicationState, IUserCardsState, userCardsActions } from "../../reducers";
import { CardModel } from "../../models";
import NoCardBlock from "../Card/NoCardsBlock";

const CardsPage = () => {
  const dispatch = useDispatch();
  const cards = useSelector<IApplicationState, CardModel[]>((state) => state.userCards.userCards);

  useEffect(() => {
    dispatch(userCardsActions.apiGetUserCards());
  }, []);

  return (
    <>
      <h1
        className="display-4"
        style={{
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        Cards
      </h1>

      {cards?.length
        ? cards.map(x => (
          <CardBlock
            cardNumber={x.CardNumber}
            valid={x.IsValid}
            state={x.State}
            type={x.Type}
          />
        ))
        : <NoCardBlock />
      }
    </>
  )
};

export default CardsPage;
