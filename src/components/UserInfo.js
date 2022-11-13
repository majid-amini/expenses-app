import React, { useState } from "react";
import DateItems from "./DateItems";
function UserInfo(props) {
  // const [title, setTitle] = useState(props.title);
  // const [amount, setAmount] = useState(props.amount);
  // const [date, setDate] = useState(props.date);
  // const clickHandler = () => {
  //   setTitle("yep!");
  //   setAmount("amound updated");
  //   setDate("test date");
  // };
  return (
    <div className="user__info">
      <div className="user__info__left">
        <DateItems date={props.date} />
        <div className="title">{props.title}</div>
      </div>
      <div className="user__info__right">
        <span>${props.amount}</span>
      </div>
      
    </div>
  );
}

export default UserInfo;
