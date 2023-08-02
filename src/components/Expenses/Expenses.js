import React, { useState } from 'react'

import Card from '../UI/Card'
import './Expenses.css'
import ExpensesChart from './ExpensesChart'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredList = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear,
  )

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredList} />
      <ExpensesList items={filteredList} />
    </Card>
  )
}

export default Expenses
