import React from "react";

import styles from "./BenifitsTable.module.css";

const serviceData = [
  { service: "Electrical & Electronics Maintenance", visits: 18 },
  { service: "Plumbing Maintenance", visits: 10 },
  { service: "Computer System Maintenance (Hardware & Software)", visits: 8 },
  { service: "Carpenter Services", visits: 6 },
  { service: "Cleaning Solutions", visits: 4 },
  { service: "Premises Review", visits: "Half Yearly Premises Audit" },
];

const BenifitsTable = () => {
  return (
    <div className="container mt-3">
      <h2 className="mb-3" style={{ fontWeight: "800" }}>
        Benefits in Package
      </h2>
      <table className="table table-bordered mt-5">
        <thead>
          <tr>
            <th className={styles.tableHeader}>Type of Services</th>
            <th className={styles.tableHeader}>Number of Visits</th>
          </tr>
        </thead>
        <tbody>
          {serviceData.map((item, index) => (
            <tr key={index} className="py-3">
              <td>{item.service}</td>
              <td>
                {typeof item.visits === "number" ? (
                  item.visits
                ) : (
                  <em>{item.visits}</em>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BenifitsTable;
