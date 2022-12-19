import { useState } from 'react';

import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from './components/NewExpense/NewExpense';

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

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const [filteredExpenses, setFilteredExpenses] = useState(DUMMY_EXPENSES);

  function addExpenseHandler(expense) {
    // console.log('In App.js!');
    // console.log(expense);
    // expense.amount = expense.amount.toString().replace('.',',');
    // const expenseItem = <ExpenseItem {...expense} />
    // setListExpensesValue([...listExpensesValue,expenseItem])
    // setUserInput((prevState) => {
      //     return { ...prevState, enteredTitle: event.target.value };
      //     // return prevState["enteredTitle"] = event.target.value;
      //   })
    // setExpensesValue((prevState) => {
    //   return [...prevState,expense]
    // });
    setExpenses(prevState => [...prevState,expense]);
  };
  // function filterExpensesByYear(selectedYear) {
  //   const filteredExpenses = DUMMY_EXPENSES.filter(element => element.date.getFullYear() == selectedYear);
  //   setExpenses(filteredExpenses);
  // }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
