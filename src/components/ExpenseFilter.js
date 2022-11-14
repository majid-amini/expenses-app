import "./ExpenseFilter.css";
const ExpenseFilter = () => {
  const filterChangeHandler = (e) => {
    console.log(e.target.value);
  }
  return (
    <div className="expenses__filter">
      <div className="expenses__filter__items">
        <label>Filter By The Year</label>
        <select onChange={filterChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
