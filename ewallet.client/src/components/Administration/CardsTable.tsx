import React from "react";

const CardsTable = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Card number</th>
            <th scope="col">Valid</th>
            <th scope="col">State</th>
            <th scope="col">Type</th>
            <th>Owner email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>1234 1234 1234 5678</td>
            <td>Yes</td>
            <td>Active</td>
            <td>Currency</td>
            <td>motto123@gmail.com</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>5264 1244 0707 0128</td>
            <td>No</td>
            <td>Active</td>
            <td>Credit</td>
            <td>jakob453434@gmail.com</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>0104 2242 3327 1703</td>
            <td>Yes</td>
            <td>Active</td>
            <td>Deposit</td>
            <td>larrybird453434@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CardsTable;
