
import React, { useEffect, useRef, useState } from 'react'
import Input from './Input'
import Select from './Select'
import { memo } from 'react'

export default function ExpenseForm({ expense, setExpense, setExpenses, editingRowId, setEditingRowId }) {
 
  const [errors, setErrors] = useState({})    
  
  const validationConfig = {
    title: [{required: true, message: 'Please enter title'},{minLength: 2, message: 'Title should be at least 2 characters long'}],
    category: [{required: true, message: 'Please select a category'}],
    amount: [{required: true, message: 'Please enter an amount'},{pattern: /^[1-9]\d*(\.\d+)?$/, message: 'Please enter a valid number'}]
  }

  const validate = (formData) => {         

   const errorsData = {}

   Object.entries(formData).forEach(([key, value]) => {     
    validationConfig[key].some((rule) =>{                  //the some method is used for first error message it is stop it is not run for second error message
     // console.log(rule)
      if(rule.required && !value) {                 //when the both condition(because && operator) are true then error message show when one condition is false (the error message is skip) conditon      //rule.required is true and we write nothing in value, so value is false//rule.required is true and we write in value, value is true
        errorsData[key] = rule.message                     //bracket notation is used for dyamic key values pairs //key → the field name (e.g. "title")//rule.message → the message text of the current rule (e.g. "Please enter title")
        return true
      }

      // if(rule.minLength && value.length < 3) {           //when both condition(because && operator) are true then show error message
       if(rule.minLength && value.length < rule.minLength) { 
        errorsData[key] = rule.message
        return true  
      }

      if(rule.pattern && !rule.pattern.test(value)){
        errorsData[key] = rule.message
        return true
      }

    })
   })

   setErrors(errorsData)                        
   return errorsData

  }

  const handleSubmit = (e) => {       
    e.preventDefault()

  const validateResult = validate(expense)            
  // console.log(Object.keys(validateResult))          
  if(Object.keys(validateResult).length) return    
  
  if(editingRowId) {
    setExpenses((prevState) => 
      prevState.map((prevExpense) => {
        if(prevExpense.id === editingRowId){
          return {...expense, id: editingRowId}
        }
        return prevExpense
      })
    )
     setExpense({
      title: '',
      category: '',
      amount: '',
    })
    setEditingRowId('')
    return                                                 //if condition is true then return from this place
  }

    setExpenses((prevState) => [...prevState,{ ...expense, id: crypto.randomUUID()}])
    setExpense({
      title: '',
      category: '',
      amount: '',
    })
  }
  

  const handleChange = (e) => {                       
  //  console.log(e.target)
  const{name, value} = e.target                       
  setExpense((prevState) => ({...prevState, [name]: e.target.value})) 
  setErrors({})                                                          
  }                                                                                    

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input 
      label="Title" 
      id="title" 
      name="title" 
      value={expense.title} 
      onChange={handleChange} 
      error={errors.title}
      />                                       
     
      <Select
      label="Category" 
      id="category" 
      name="category" 
      value={expense.category} 
      onChange={handleChange} 
      options={['Grocery', 'Clothes', 'Bills', 'Education', 'Medicine']}
      defaultOption='Select Category'
      error={errors.category}
      />

      <Input 
      label="Amount" 
      id="amount" 
      name="amount" 
      value={expense.amount} 
      onChange={handleChange} 
      error={errors.amount}
      />  
      <button className="add-btn">{editingRowId ? 'save' : 'Add'}</button>
    </form>
  )
}