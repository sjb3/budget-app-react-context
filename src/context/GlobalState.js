import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  incomeTransactions: [
    { id: 1, incomeText: "Cat Food", incomeAmount: 150 },
    { id: 2, incomeText: "Salary", incomeAmount: 15000 },
    { id: 3, incomeText: "Bonus", incomeAmount: 150 },
  ],
  expenseTransactions: [
    { id: 4, expenseText: "Rent", expenseAmount: 1150 },
    { id: 5, expenseText: "Bank", expenseAmount: 100 },
    { id: 6, expenseText: "Consmetics", expenseAmount: 10 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addIncome = (incomeTransaction) => {
    dispatch({ type: "ADD_INCOME", payload: incomeTransaction });
  };

  const addExpense = (expenseTransaction) => {
    dispatch({ type: "ADD_EXPENSE", payload: expenseTransaction });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIncome,
        addExpense,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
