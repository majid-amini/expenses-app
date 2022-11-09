function DateAndTitle(props) {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="user__info__left">
      <div className="date__info">
        <span className="date__info__year">{year}</span>
        <span className="date__info__month">{month}</span>
        <span className="date__info__day">{day}</span>
      </div>
      <div className="title">{props.title}</div>
    </div>
  );
}
export default DateAndTitle;
