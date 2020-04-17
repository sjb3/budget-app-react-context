import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  const { incomeText, incomeAmount } = income;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const onSubmitIncome = (e) => {
    e.preventDefault();

    const newIncomeTransaction = {
      id: uuidv4(),
      incomeText,
      incomeAmount: +incomeAmount,
    };

    addIncome(newIncomeTransaction);
    setIncome({ incomeText: "", incomeAmount: "" });
    // console.log(newIncomeTransaction);
  };

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });

  const { expenseText, expenseAmount } = expense;

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();

    const newExpenseTransaction = {
      id: uuidv4(),
      expenseText,
      expenseAmount: +expenseAmount,
    };

    addExpense(newExpenseTransaction);
    setExpense({ expenseText: "", expenseAmount: "" });
    // setExpense("");
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            onChange={onChangeIncome}
            type="text"
            name="incomeText"
            placeholder="Add income ..."
            value={incomeText}
            autoComplete="off"
          />
          <input
            onChange={onChangeIncome}
            type="number"
            name="incomeAmount"
            placeholder="Add amount ..."
            value={incomeAmount}
            autoComplete="off"
          />
          <input type="submit" value="submit" />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input
            name="expenseText"
            onChange={onChangeExpense}
            type="text"
            placeholder="Add expense ..."
            value={expenseText}
            autoComplete="off"
          />
          <input
            name="expenseAmount"
            onChange={onChangeExpense}
            type="number"
            placeholder="Add amount ..."
            value={expenseAmount}
            autoComplete="off"
          />
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};
