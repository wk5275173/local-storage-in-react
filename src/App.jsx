// import { useState } from 'react'
// import './App.css'
// import ExpenseForm from './components/ExpenseForm'
// import ExpenseTable from './components/ExpenseTable'
// import expenseData from './expenseData'
// import { useLocaleStorage } from './hooks/useLocalStorage'

// function App() {
//    const [expense, setExpense] = useState({
//       title: '',
//       category: '',
//       amount: ''
//     })
//   const [expenses, setExpenses] = useState(expenseData)
//   const [editingRowId, setEditingRowId] = useState('')

//   // const[localeData, setLocaleData] = useLocaleStorage()  // we will not pass anything in (useLocaleStorage()) that why it give us undefined
//   // console.log(localeData)

//   const[localeData, setLocaleData] = useLocaleStorage('myNum', [1,2,3])  
//   console.log(localeData)

//   return (
//     <>
//       <main>
//       <h1 onClick={() => {
//         setLocaleData([4,5,6])
//       }}>Track Your Expense</h1>
//       <h2>{localeData.join(', ')}</h2>
//       <div className="expense-tracker">
//       <ExpenseForm setExpenses={setExpenses} expense={expense} setExpense={setExpense} editingRowId={editingRowId} setEditingRowId={setEditingRowId}/>
//       <ExpenseTable expenses={expenses} setExpense={setExpense} setExpenses={setExpenses} setEditingRowId={setEditingRowId}/>
//       </div>
//     </main>
//     </>
//   )
// }                                                   

// export default App


//second method


// import { useState } from 'react'
// import './App.css'
// import ExpenseForm from './components/ExpenseForm'
// import ExpenseTable from './components/ExpenseTable'
// import expenseData from './expenseData'
// import { useLocaleStorage } from './hooks/useLocalStorage'

// function App() {
//    const [expense, setExpense] = useState({
//       title: '',
//       category: '',
//       amount: ''
//     })
//   const [expenses, setExpenses] = useState(expenseData)
//   const [editingRowId, setEditingRowId] = useState('')

//   // const[localeData, setLocaleData] = useLocaleStorage()  // we will not pass anything in (useLocaleStorage()) that why it give us undefined
//   // console.log(localeData)

//   const[localeData, setLocaleData] = useLocaleStorage('myNum', [1,2,3])  
//   console.log(localeData)

//   return (
//     <>
//       <main>
//       <h1 onClick={() => {
//         setLocaleData((prevState) => [...prevState, 4, 5, 6])
//       }}>Track Your Expense</h1>
//       <h2>{localeData.join(', ')}</h2>
//       <div className="expense-tracker">
//       <ExpenseForm setExpenses={setExpenses} expense={expense} setExpense={setExpense} editingRowId={editingRowId} setEditingRowId={setEditingRowId}/>
//       <ExpenseTable expenses={expenses} setExpense={setExpense} setExpenses={setExpenses} setEditingRowId={setEditingRowId}/>
//       </div>
//     </main>
//     </>
//   )
// }                                                   

// export default App

//in our project

// import { useState } from 'react'
// import './App.css'
// import ExpenseForm from './components/ExpenseForm'
// import ExpenseTable from './components/ExpenseTable'
// import expenseData from './expenseData'
// import { useLocaleStorage } from './hooks/useLocalStorage'

// function App() {
//    const [expense, setExpense] = useState({
//       title: '',
//       category: '',
//       amount: ''
//     })
//   const [expenses, setExpenses] = useLocaleStorage('expenses', expenseData)
//   const [editingRowId, setEditingRowId] = useState('')


//   return (
//     <>
//       <main>
//       <h1>Track Your Expense</h1>
//       <div className="expense-tracker">
//       <ExpenseForm setExpenses={setExpenses} expense={expense} setExpense={setExpense} editingRowId={editingRowId} setEditingRowId={setEditingRowId}/>
//       <ExpenseTable expenses={expenses} setExpense={setExpense} setExpenses={setExpenses} setEditingRowId={setEditingRowId}/>
//       </div>
//     </main>
//     </>
//   )
// }                                                   

// export default App


import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import expenseData from './expenseData'
import { useLocaleStorage } from './hooks/useLocalStorage'

function App() {
   const [expense, setExpense] = useLocaleStorage('expense', {           //editingRowId is bind with this
      title: '',
      category: '',
      amount: ''
    })
  const [expenses, setExpenses] = useLocaleStorage('expenses', expenseData)
  const [editingRowId, setEditingRowId] = useLocaleStorage('editingRowId', '')         //we can use (useLocaleStorage any where) //editingRowId is the key name


  return (
    <>
      <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
      <ExpenseForm setExpenses={setExpenses} expense={expense} setExpense={setExpense} editingRowId={editingRowId} setEditingRowId={setEditingRowId}/>
      <ExpenseTable expenses={expenses} setExpense={setExpense} setExpenses={setExpenses} setEditingRowId={setEditingRowId}/>
      </div>
    </main>
    </>
  )
}                                                   

export default App