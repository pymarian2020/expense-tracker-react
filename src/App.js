import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
