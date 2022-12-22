import { useState } from "react";
import NewExpense from '../NewExpense/NewExpense';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

let DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Papel Higiénico",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "TV Nueva",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Seguro de coche",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Nuevo escritorio (Madera)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

export default function Expenses(props) {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const [filteredYear, setFilteredYear] = useState("All");

  let filteredExpenses = expenses;

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  };

  function addExpenseHandler(expense) {
    setExpenses(prevState => [...prevState,expense]);
  };

  // you can return the ExpenseItem this way:
  if (filteredYear != "All") {
    filteredExpenses = expenses.filter(
      (element) => element.date.getFullYear() == filteredYear
    );
  }

  filteredExpenses.forEach((element) => {
    element.amount = element.amount.toString().replace(".", ",");
  });

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
}
