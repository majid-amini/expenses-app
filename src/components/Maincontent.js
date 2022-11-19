import React, { useState } from "react";
import UserInfo from "./UserInfo";
import "./Maincontent.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Maincontent = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredOptions = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="main_content__container">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
      />
      <ExpensesChart expenses={filteredOptions}/>
      {filteredOptions.length === 0 ? (
        <p>No Items!</p>
      ) : (
        filteredOptions.map((item) => (
          <UserInfo
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      )}
     
    </div>
  );
};

export default Maincontent;
