import DateAndTitle from "./DateAndTitle";
function UserInfo(props) {
  return (
    <div className="user__info">
      <DateAndTitle date={props.date} />
      <div className="user__info__right">
        <span>${props.amount}</span>
      </div>
    </div>
  );
}

export default UserInfo;
