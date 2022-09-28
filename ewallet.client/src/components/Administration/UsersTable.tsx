import React from "react";

const UsersTable = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Email</th>
            <th scope="col">Create date</th>
            <th scope="col">Password change date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>motto123@gmail.com</td>
            <td>20-08-2022</td>
            <td>20-08-2022</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>jakob453434@gmail.com</td>
            <td>01-08-2022</td>
            <td>01-08-2022</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>larrybird453434@gmail.com</td>
            <td>22-09-2022</td>
            <td>28-09-2022</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
