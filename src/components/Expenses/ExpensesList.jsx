import ExpenseItem from "./ExpenseItem";

export default function ExpensesList({ expenses }) {
  let expensesContent = <h2 className="expenses-list__fallback">No expenses found.</h2>;

  if (expenses.length > 0) {
    expensesContent = expenses.map((expense) => (
      <ExpenseItem key={expense.id} {...expense} />
    ));
  }
  return (
    <div className="expenses-list">
      {expensesContent}
    </div>
  )
};