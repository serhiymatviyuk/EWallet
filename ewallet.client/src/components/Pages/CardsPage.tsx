import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IApplicationState, userCardsActions } from "../../reducers";
import { CardModel } from "../../models";
import Table, { ColumnsType } from "antd/lib/table";

const columns: ColumnsType<CardModel> = [
  {
    title: 'Card Number',
    dataIndex: 'CardNumber',
    key: 'CardNumber',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Valid',
    dataIndex: 'IsValid',
    key: 'IsValid',
    render: (_, { IsValid }: any) => (
      <>
        {IsValid?.toString()}
      </>
    ),
  },
  {
    title: 'State',
    dataIndex: 'State',
    key: 'State',
  },
  {
    title: 'Type',
    dataIndex: 'Type',
    key: 'Type',
  }
];

const CardsPage = () => {
  const dispatch = useDispatch();
  const cards = useSelector<IApplicationState, CardModel[]>((state) => state.userCards.userCards);

  useEffect(() => {
    dispatch(userCardsActions.apiGetUserCards());
  }, []);

  return (
    <>
      <div style={{ padding: '20px' }}>
        <Table columns={columns} dataSource={cards} />
      </div>
    </>
  )
};

export default CardsPage;

