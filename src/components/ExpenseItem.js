import "./ExpenseItem.css";
import ExpenseForm from "./ExpenseForm";
const ExpenseItem = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    
  };

  return (
    <div className="expense_container">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default ExpenseItem;
