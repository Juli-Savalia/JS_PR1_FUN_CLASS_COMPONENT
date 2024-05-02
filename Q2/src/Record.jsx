import React from "react";

const Record = ({ employeedata }) => {
  console.log(employeedata);
  return (
    <div className="container">
      <h1 className="pt-3 text-center">Employee's Data</h1>
      <div className="p-5">
        <table
          border="4"
          cellPadding={5}
          cellSpacing={15}
          className="table table-info table-striped w-100 place-items-center text-center table-hover"
          height="350"
        >
          <thead>
            <tr>
              <th className="fsw-bold fs-5" scope="col">
                ID
              </th>
              <th className="fsw-bold fs-5" scope="col">
                NAME
              </th>
              <th className="fsw-bold fs-5" scope="col">
                E-MAIL
              </th>
              <th className="fsw-bold fs-5" scope="col">
                PHONE
              </th>
              <th className="fsw-bold fs-5" scope="col">
                Address
              </th>
              <th className="fsw-bold fs-5" scope="col">
                Degree
              </th>
              <th className="fsw-bold fs-5" scope="col">
                Salary
              </th>
              <th className="fsw-bold fs-5" scope="col">
                Department
              </th>
            </tr>
          </thead>
          <tbody>
            {employeedata.map((val) => {
              return (
                <tr key={val.empid}>
                  <td>{val.empid}</td>
                  <td>{val.empname}</td>
                  <td>{val.empemail}</td>
                  <td>{val.empphone}</td>
                  <td>
                    {val.empaddress.area},{val.empaddress.city},
                    {val.empaddress.state},{val.empaddress.country}
                  </td>
                  <td>{val.empdeg}</td>
                  <td>{val.empsalary}</td>
                  <td>{val.empdepartment}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Record;
