import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import "../Tables/table.css";

export default function Tables() {
  const [data, setData] = useState([]);
  const [state, setstate] = useState({
    totalPages: 20,
    currentPage: 1,
  });

  const { totalPages, currentPage } = state;

  const handlePagination = (current) => {
    setstate({ ...state, currentPage: current });
  };

  const apiCall = async () => {
    await fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((response) => {
        setData(response);
      });
  };

  useEffect(() => {
    apiCall();
  }, []);
  return (
    <div className="main-table-container">
      <h1>Tables</h1>
      <p style={{ marginBottom: "1.5rem" }}>
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the
        <a target="_blank" href="https://datatables.net" rel="noreferrer">
          official DataTables documentation
        </a>
      </p>
      <div className="table-container">
        <div className="card-header">
          <h4>DataTables Example</h4>
        </div>
        <div className="card-body">
          <div className="card-details">
            <div className="card-left">
              <label>
                Show{" "}
                <select>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>{" "}
                entries
              </label>
            </div>
            <div className="card-right">
              <label>
                Search : {"  "}
                <input type="search" />
              </label>
            </div>
          </div>
          <div>
            <table>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>body</th>
              </tr>
              {data.map((newdata, index) => (
                <tr key={index}>
                  <td>{newdata.id}</td>
                  <td>{newdata.name}</td>
                  <td>{newdata.email}</td>
                  <td>{newdata.body}</td>
                </tr>
              ))}
            </table>
          </div>
          <div className="card-footer">
            <div className="card-details">
              <div className="card-left">Showing 1 to 10 of 57 entries</div>
              <div className="card-right">
                <Pagination
                  total={totalPages}
                  current={currentPage}
                  pagination={(crPage) => handlePagination(crPage)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
