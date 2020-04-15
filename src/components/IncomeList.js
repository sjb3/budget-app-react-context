import React from "react";

export const IncomeList = () => {
  return (
    <div className="transactions transactions-income">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        <li className="transaction">
          <span className="transaction-text">UI</span>
          <span className="transaction-amount">$5,000</span>
          <button className="delete-btn">
            <i className="fas fa-trash"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};
