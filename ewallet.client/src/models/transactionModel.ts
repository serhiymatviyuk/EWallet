export interface ITransactionModel {
    Key: string;
    Date: Date;
    Amount: Number;
    CardNumber: string;

    VendorName: string;
    VendorAddress: string;
    VendorContacts: string;
}