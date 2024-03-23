import React, { useState, forwardRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import styles from "./Category.module.css";

import { subscriptionFormActions } from "../../redux";

const Category = forwardRef(({ fullPackage }, ref) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");

  const selectOnClickHandler = (e) => {
    e.preventDefault()
    setSelected(e.target.value);
    dispatch(
      subscriptionFormActions.setSelectedSolutions({
        selectedSolutions: e.target.value,
      })
    );
  };

  const [selectedOption, setSelectedOption] = useState("Full Package");

  const handleOptionClick = (e) => {
    setSelectedOption(e.target.value);
    dispatch(
      subscriptionFormActions.setSelectedSolutionType({
        solutionType: e.target.value,
      })
    );
  };

  const handleAsPerServiceSolutionsClick = (e) => {
    setSelected(e.target.value);
    dispatch(
      subscriptionFormActions.setAsPerServiceSelectedSolutions({
        selectedSolutions: e.target.value,
      })
    );
  }

  const standardTable = (
    <div id="FullPackage">
      <h3 className="text-center">Full Package</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Service</th>
            <th>Package Standard</th>
            <th>Package Growth</th>
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
          <tr>
            <td></td>
            <td>
              <button
                id="selectBtn"
                onClick={selectOnClickHandler}
                value="Package Standard"
                className={`${styles.selectButton} ${selected == "Package Standard" ? styles.btnActive : ""
                  }`}
              >
                SELECT
              </button>
            </td>
            <td>
              <button
                id="selectBtn"
                value="Package Growth"
                onClick={selectOnClickHandler}
                className={`${styles.selectButton} ${selected == "Package Growth" ? styles.btnActive : ""
                  }`}
              >
                SELECT
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const growthTable = (
    <div id="asperservice">
      <h3 className="text-center">As per services</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Service</th>
            <th>Number Of Visits</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Electrical & Electronics Maintenance</td>
            <td>90</td>
            <input
              onClick={handleAsPerServiceSolutionsClick}
              type="checkbox"
              class="btn-check"
              id="btncheck1"
              autocomplete="off"
              value="Electrical & Electronics Maintenance"
            />
            <label
              class="btn btn-outline-primary"
              htmlFor="btncheck1"
              style={{ borderRadius: "50%" }}
            ></label>
          </tr>
          <tr>
            <td>Plumbing Maintenance</td>
            <td>90</td>
            <input
              onClick={handleAsPerServiceSolutionsClick}
              type="checkbox"
              class="btn-check"
              id="btncheck2"
              autocomplete="off"
              value="Plumbing Maintenance"
            />
            <label
              class="btn btn-outline-primary"
              htmlFor="btncheck2"
              style={{ borderRadius: "50%" }}
            ></label>
          </tr>
          <tr>
            <td>Computer System Maintenance (Hardware & Software)</td>
            <td>90</td>
            <input
              onClick={handleAsPerServiceSolutionsClick}
              type="checkbox"
              class="btn-check"
              id="btncheck3"
              autocomplete="off"
              value="Computer System Maintenance"
            />
            <label
              class="btn btn-outline-primary"
              htmlFor="btncheck3"
              style={{ borderRadius: "50%" }}
            ></label>
          </tr>
          <tr>
            <td>Carpenter Services</td>
            <td>90</td>
            <input
              onClick={handleAsPerServiceSolutionsClick}
              type="checkbox"
              class="btn-check"
              id="btncheck4"
              autocomplete="off"
              value="Carpenter Services"
            />
            <label
              class="btn btn-outline-primary"
              htmlFor="btncheck4"
              style={{ borderRadius: "50%" }}
            ></label>
          </tr>
          <tr>
            <td>Housekeeping Services (Cleaning Services)</td>
            <td>120</td>
            <input
              onClick={handleAsPerServiceSolutionsClick}
              type="checkbox"
              class="btn-check"
              id="btncheck5"
              autocomplete="off"
              value="Housekeeping Services"
            />
            <label
              class="btn btn-outline-primary"
              htmlFor="btncheck5"
              style={{ borderRadius: "50%" }}
            ></label>
          </tr>
          <tr>
            <td>Gardening Services</td>
            <td>120</td>
            <input
              onClick={handleAsPerServiceSolutionsClick}
              type="checkbox"
              class="btn-check"
              id="btncheck6"
              autocomplete="off"
              value="Gardening Services"
            />
            <label
              class="btn btn-outline-primary"
              htmlFor="btncheck6"
              style={{ borderRadius: "50%" }}
            ></label>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <div className="mb-5">
        <label htmlFor="categoryType" className="form-label">
          Select Solution
        </label>
        <select
          className="form-select"
          id="categoryType"
          ref={ref}
          onChange={handleOptionClick}
        >
          <option value="Full Package">Full Package</option>
          <option value="As Per Services">As Per Services</option>
        </select>
      </div>
      {selectedOption == "Full Package" ? standardTable : growthTable}
    </>
  );
});

export default Category;
