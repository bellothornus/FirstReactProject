import { useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

function ExpenseItem({id,title,amount,date}) {
  //puede llamarse de cualquier forma el parametro que es único
  //<button onClick={() => {console.log("Clicked!")}}>Change Title</button>
  //<button onClick={function(){console.log("Clicked!")}}>Change Title</button>

  const [amountValue, setAmount] = useState(amount);

  function clickHandler() {
    // setTitle('Updated!');
    //se puede refactorizar utilizando una lcase tipo "Moneda"
    let newAmount = parseFloat(amountValue.replace(',','.'));
    newAmount = newAmount + 1;
    newAmount = newAmount.toString().replace('.',',');
    setAmount(newAmount);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amountValue}€</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
