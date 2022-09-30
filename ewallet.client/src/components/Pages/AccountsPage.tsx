import React from "react";
import Table, { ColumnsType } from "antd/lib/table";
import { IAccountModel } from "../../models";

const columns: ColumnsType<IAccountModel> = [
  {
    title: 'Balance',
    dataIndex: 'Balance',
    key: 'Key',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Account Type',
    dataIndex: 'AccountType',
    key: 'Key',
    render: (_, { AccountType }: any) => (
      <>
        {AccountType?.toString()}
      </>
    ),
  }
];

const mockData: IAccountModel[] = [
  {
    Key: '1',
    AccountType: 'Deposit',
    Balance: 10000
  },
  {
    Key: '1',
    AccountType: 'Credit',
    Balance: 25000
  }
];

const AccountsPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Table columns={columns} dataSource={mockData} />
    </div>
  )
};

export default AccountsPage;
