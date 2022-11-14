import "./ExpenseFilter.css";
const ExpenseFilter = (props) => {
  const onChangeHandler = (e) => {
    props.onChangeFilter(e.target.value)
  }
  return (
    <div className="expenses__filter">
      <div className="expenses__filter__items">
        <label>Filter By The Year</label>
        <select onChange={onChangeHandler}>
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
