import React, { useState } from "react";
import UserInfo from "./UserInfo";
import "./Maincontent.css";
import ExpenseFilter from "./ExpenseFilter";
// import ExpenseItem from "./ExpenseItem";

const Maincontent = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div className="main_content__container">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
      />

      {props.items.map((item) => (
        <UserInfo key={item.id} title={item.title} amount={item.amount} date={item.date} />
      ))}
    </div>
  );
};

export default Maincontent;
