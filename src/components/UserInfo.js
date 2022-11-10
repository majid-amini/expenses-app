import DateItems from "./DateItems";
function UserInfo(props) {
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
