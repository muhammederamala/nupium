import React, { useState } from "react";

function Category({ fullPackage, categoryTypeRef }) {
  // JSX for Standard Package table
  const standardTable = (
    <div id="FullPackage">
      <h3 className="text-center">Standard Package</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Service</th>
            <th>Number Of Visits</th>
            <th>Total Visits (2 years)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Electrical & Electronics Maintenance</td>
            <td>120</td>
            <td>240</td>
          </tr>
          <tr>
            <td>Plumbing Maintenance</td>
            <td>120</td>
            <td>240</td>
          </tr>
          <tr>
            <td>Computer System Maintenance (Hardware & Software)</td>
            <td>120</td>
            <td>240</td>
          </tr>
          <tr>
            <td>Carpenter Services</td>
            <td>90</td>
            <td>180</td>
          </tr>
          <tr>
            <td>House keeping services (Cleaning Services)</td>
            <td>120</td>
            <td>240</td>
          </tr>
          <tr>
            <td>Gardening Services</td>
            <td>120</td>
            <td>240</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  // JSX for Growth Package table
  const growthTable = (
    <div id="asperservice">
      <h3 className="text-center">As per services</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Service</th>
            <th>Number Of Visits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Electrical & Electronics Maintenance</td>
            <td>90</td>
          </tr>
          <tr>
            <td>Plumbing Maintenance</td>
            <td>90</td>
          </tr>
          <tr>
            <td>Computer System Maintenance (Hardware & Software)</td>
            <td>90</td>
          </tr>
          <tr>
            <td>Carpenter Services</td>
            <td>90</td>
          </tr>
          <tr>
            <td>Housekeeping Services (Cleaning Services)</td>
            <td>120</td>
          </tr>
          <tr>
            <td>Gardening Services</td>
            <td>120</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const [selectedOption, setSelectedOption] = useState("Full Package");

  const handleOptionClick = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor="categoryType" className="form-label">
          Select Solution
        </label>
        <select
          className="form-select"
          id="categoryType"
          ref={categoryTypeRef}
          onChange={handleOptionClick}
        >
          <option value="">Select Category Type</option>
          <option value="Full Package">Full Package</option>
          <option value="As Per Services">As Per Services</option>
        </select>
      </div>
      {selectedOption == "Full Package" ? standardTable : growthTable}
    </>
  );
}

export default Category;
