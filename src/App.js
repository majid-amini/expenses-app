import { useState } from "react";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Maincontent from "./components/Maincontent";
// import ExpenseFilter from "./components/ExpenseFilter";
function App() {
  const userData = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Wooden Desk",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setExpenses] = useState(userData);
  const addExpenseHandler = (expense) => {
      setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <ExpenseItem onAddExpense={addExpenseHandler} />
      {/* <ExpenseFilter /> */}
      <Maincontent items={expenses} />
    </div>
  );
}

export default App;
