

import React, { useState } from 'react'
import { useFilter } from "../hooks/useFilter";
import ContextMenu from './ContextMenu';

export default function ExpenseTable({expenses, setExpense, setExpenses, setEditingRowId}) {     
  
  const[menuPostion, setMenuPostion] = useState({})
  const[rowId, setRowId] = useState('')
  const[sortCallback, setSortCallback] = useState(() => () => {})  // we use usestate of two type initially and the second is function 
  const [filterData, setQuery]= useFilter(expenses, (data) => data.category) // so callback(el) → el.category// in filterData //Each element is one expense object with fields id, title, category, amount.
  const total = filterData.reduce((accumulator, current) => accumulator + parseInt(current.amount), 0) //It's the filtered array returned by your hook//accumulator does not point to any element in the array. It points to the running total — a plain number that you carry forward between iterations.//current points to the current element of filterData being processed at that moment — i.e. one expense object.

  

  return (
    <>
    <ContextMenu  menuPosition={menuPostion} setExpense={setExpense} setMenuPosition={setMenuPostion} expenses={expenses} setExpenses={setExpenses} rowId={rowId} setEditingRowId={setEditingRowId}/> 
    <table className="expense-table" onClick={() => setMenuPostion({})}>              
          <thead>
            <tr>
               <th className="amount-column">
                <div>
                  <span>Title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 384 512"
                    className="arrow up-arrow"
                    onClick={() => {
                      setSortCallback(() =>(a,b) => a.title.localeCompare(b.title))
                    }}
                  >
                    <title>Ascending</title>
                    <path
                      d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 384 512"
                    className="arrow down-arrow"
                     onClick={() => {
                      setSortCallback(() =>(a,b) => b.title.localeCompare(a.title))     
                    }}
                  >
                    <title>Descending</title>
                    <path
                      d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                    />
                  </svg>
                </div>
              </th>
              <th>
                <select onChange={(e) => setQuery(e.target.value.toLowerCase())}>
                  <option value="">All</option>
                  <option value="grocery">Grocery</option>
                  <option value="clothes">Clothes</option>
                  <option value="bills">Bills</option>
                  <option value="education">Education</option>
                  <option value="medicine">Medicine</option>
                </select>
              </th>
              <th className="amount-column">
                <div>
                  <span>Amount</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 384 512"
                    className="arrow up-arrow"
                    onClick={() => {
                      setSortCallback(() => (a,b) => a.amount - b.amount)
                    }}
                  >
                    <title>Ascending</title>
                    <path
                      d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 384 512"
                    className="arrow down-arrow"
                     onClick={() => {
                      setSortCallback(() => (a,b) => b.amount - a.amount)   //in usestate the(return callback)  
                    }}
                  >
                    <title>Descending</title>
                    <path
                      d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                    />
                  </svg>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filterData.sort(sortCallback).map(({id, title, category, amount}) => (               
            <tr key={id} onContextMenu={(e) =>{
              e.preventDefault()
              // console.log(e.clientX, e.clientY)
              setMenuPostion({left: e.clientX + 4, top: e.clientY + 4})  
              setRowId(id)
            }}>
              <td>{title}</td>
              <td>{category}</td>
              <td>{amount}</td>
            </tr>
            ))}
            <tr>
              <th>Total</th>
              <th className='clear-sort' 
               onClick={() => {
               setSortCallback(() => () => {})  //in this place it is not the object it is the function body
               }}>Clear Sort</th>
              <th>₹{total}</th>
            </tr>
          </tbody>
        </table>
        </>
  )
}