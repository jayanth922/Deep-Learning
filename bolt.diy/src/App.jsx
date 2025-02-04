import React, { useState } from 'react'
  import { format } from 'date-fns'

  function App() {
    const [expenses, setExpenses] = useState([])
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'))
    const [category, setCategory] = useState('Food')
    const [editingIndex, setEditingIndex] = useState(null)

    const categories = ['Food', 'Transport', 'Entertainment', 'Utilities', 'Other']

    const addExpense = () => {
      if (description && amount && date && category) {
        setExpenses([...expenses, { description, amount: parseFloat(amount), date, category }])
        setDescription('')
        setAmount('')
        setDate(format(new Date(), 'yyyy-MM-dd'))
        setCategory('Food')
      }
    }

    const deleteExpense = (index) => {
      setExpenses(expenses.filter((_, i) => i !== index))
    }

    const editExpense = (index) => {
      const expenseToEdit = expenses[index]
      setDescription(expenseToEdit.description)
      setAmount(expenseToEdit.amount)
      setDate(expenseToEdit.date)
      setCategory(expenseToEdit.category)
      setEditingIndex(index)
    }

    const updateExpense = () => {
      if (description && amount && date && category) {
        const updatedExpenses = expenses.map((expense, index) =>
          index === editingIndex ? { description, amount: parseFloat(amount), date, category } : expense
        )
        setExpenses(updatedExpenses)
        setDescription('')
        setAmount('')
        setDate(format(new Date(), 'yyyy-MM-dd'))
        setCategory('Food')
        setEditingIndex(null)
      }
    }

    const filterExpenses = (category) => {
      return category === 'All' ? expenses : expenses.filter(expense => expense.category === category)
    }

    const [filter, setFilter] = useState('All')

    return (
      <div>
        <h1>Expense Tracker</h1>
        <div className="filter-container">
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="form-container">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
          {editingIndex !== null ? (
            <button onClick={updateExpense}>Update Expense</button>
          ) : (
            <button onClick={addExpense}>Add Expense</button>
          )}
        </div>
        <ul>
          {filterExpenses(filter).map((expense, index) => (
            <li key={index}>
              <div className="expense-details">
                <span>{expense.description}</span>
                <span>${expense.amount.toFixed(2)}</span>
                <span>{format(new Date(expense.date), 'dd/MM/yyyy')}</span>
                <span>{expense.category}</span>
              </div>
              <div>
                <button className="edit-btn" onClick={() => editExpense(index)}>Edit</button>
                <button className="delete-btn" onClick={() => deleteExpense(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
        <h2 className="total">Total: ${filterExpenses(filter).reduce((sum, expense) => sum + expense.amount, 0).toFixed(2)}</h2>
      </div>
    )
  }

  export default App
