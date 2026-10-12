import React from 'react'

export default function Input({label, id, name, value, onChange, error}) { // The Names in the Destructuring Are the Same Ones Used in { } Below//The actual prop names live in the parent's JSX and match the destructuring keys in the child's signature.//custom input field //id, name, value, onChange on the left of = → these are fixed React/HTML attribute names. You cannot change them.//on the right of =  → these are your local variables. Rename them however you like.
  return (
    <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <input id={id} name={name} value={value} onChange={onChange}/> 
        <p className='error'>{error}</p>                                                          
      </div>
  )
}                                                   //{ } contains a variable/expression    //Every { } here can hold any JavaScript expression, including any variable name you like   // <input id={id} name={name} value={value} onChange={onChange}/>//Right of = → { } passes a JS value as an attribute. //<p className='error'>{error}</p>  //Between tags → { } renders a JS value as content.
