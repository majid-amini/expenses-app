import "./ExpenseItem.css";

function ExpenseItem() {
  const submitForm = (e) => {
    const title = document.querySelector('.title_text');
    e.preventDefault();
    console.log(title.value);
  };
  return (
    <div className="expense_container">
      <form onSubmit={submitForm}>
        <div>
          <label>Title</label>
          <input className="title_text" type="text" />
        </div>
        <div>
          <label>Amount</label>
          <input id="amount" min={0.1} max={10} type="number" />
        </div>
        <div>
          <label>Date</label>
          <input id="date" type="date" />
        </div>
        <button type="submit">Add New Expense</button>
      </form>
    </div>
  );
}

export default ExpenseItem;
