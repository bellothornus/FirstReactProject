import './ExpenseDate.css';
function ExpeneseDate({ date }) {
  const month = date.toLocaleString("es-ES", { month: "long" });
  const year = date.getFullYear();
  const day = date.toLocaleString("es-ES", { day: "2-digit" });

  return (
    //<div>{day} de {month} del {year}</div>
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpeneseDate;
