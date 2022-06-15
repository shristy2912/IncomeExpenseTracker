import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";


function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const saveFilteredYear = (filterYear) => {
    console.log("Expenses");
    setFilteredYear(filterYear);
  };

  const filteredExpenses=props.expenses.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })

  

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onFilteredYear={saveFilteredYear}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
}
export default Expenses;
