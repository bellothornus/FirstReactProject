import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./ExpenseList.css";

export default function ExpenseList({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("All");
  let filteredExpenses = expenses;

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  // you can return the ExpenseItem this way:
  if (filteredYear != "All") {
    filteredExpenses = expenses.filter(
      (element) => element.date.getFullYear() == filteredYear
    );
  }

  filteredExpenses.forEach((element) => {
    element.amount = element.amount.toString().replace(".", ",");
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem key={expense.id} {...expense} />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
}
