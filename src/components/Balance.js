import React from "react";

export const Balance = () => (
  <div className="balance">
    <h2>Your Balance</h2>
    <h3>$ 0.00</h3>
    <div className="income-expense">
      <div className="plus">
        <h3>income</h3>
        <p>+ $ 0.00</p>
      </div>
      <div className="minus">
        <h3>expense</h3>
        <p>- $ 0.00</p>
      </div>
    </div>
  </div>
);
