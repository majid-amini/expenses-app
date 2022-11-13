import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    const formData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(formData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const numberChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  return (
    <form onSubmit={submitForm}>
      <div className="form__inputs__container">
        <div className="form__title__total">
          <label>Title</label>
          <input
            className="title_text"
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="form__amount__total">
          <label>Amount</label>
          <input
            id="amount"
            min="0.01"
            step="0.01"
            type="number"
            onChange={numberChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="form__date__total">
          <label>Date</label>
          <input
            id="date"
            type="date"
            min="2022,1,1"
            max="2024,1,1"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="form__submit__total">
        <button type="submit">Add New Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
