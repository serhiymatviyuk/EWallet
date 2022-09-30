import React from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { ITransactionModel } from "../../models";

const columns: ColumnsType<ITransactionModel> = [
  {
    title: 'Card Number',
    dataIndex: 'CardNumber',
    key: 'Key',
    render: (_, { CardNumber }: any) => (<a>{CardNumber}</a>),
  },
  {
    title: 'Date',
    dataIndex: 'Date',
    key: 'Key',
    render: (_, { Date }: any) => (Date?.toLocaleDateString('en-US')),
  },
  {
    title: 'Amount',
    dataIndex: 'Amount',
    key: 'Key',
    render: (_, { Amount }: any) => (Amount?.toString()),
  },

  {
    title: 'Vendor',
    dataIndex: 'VendorName',
    key: 'Key',
    render: (_, { VendorName }: any) => (VendorName),
  },
  {
    title: 'Address',
    dataIndex: 'VendorAddress',
    key: 'Key',
    render: (_, { VendorAddress }: any) => (VendorAddress),
  },
  {
    title: 'Contacts',
    dataIndex: 'VendorContacts',
    key: 'Key',
    render: (_, { VendorContacts }: any) => (VendorContacts),
  }
];

const mockData: ITransactionModel[] = [
  {
    Key: '1',
    Date: new Date('09/28/2022'),
    Amount: 1146,
    CardNumber: '4444555566667777',

    VendorName: 'UFSC',
    VendorAddress: 'Evergreen, Alabama(AL), 36401',
    VendorContacts: '(920) 592-6065'
  },
];

const TransactionPage = () => {
  return (
    <>
      <div style={{ padding: '20px' }}>
        <Table columns={columns} dataSource={mockData} />
      </div>
    </>
  );
};

export default TransactionPage;
