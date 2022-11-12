const ExpenseForm = () => {
  const submitForm = (e) => {
    const title = document.querySelector(".title_text");
    e.preventDefault();
    console.log(title.value);
  };
  const titleChangeHandler = () => {
    console.log('yes');
  }
  const numberChangeHandler = () => {
    console.log('number changed');
  }
  const dateChangeHandler = () => {
    console.log('date changed');
}
  return (
    <form onSubmit={submitForm}>
      <div className="form__inputs__container">
        <div className="form__title__total">
          <label>Title</label>
          <input className="title_text" type="text" onChange={titleChangeHandler} />
        </div>
        <div className="form__amount__total">
          <label>Amount</label>
          <input id="amount" min="0.01" step="0.01" type="number" onChange={numberChangeHandler} />
        </div>
        <div className="form__date__total">
          <label>Date</label>
          <input id="date" type="date" min="2022,1,1" max="2024,1,1" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="form__submit__total">
        <button type="submit">Add New Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
