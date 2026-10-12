// import { useState } from "react";

// export function useLocaleStorage(key, initialData) {
// const[data, setData] = useState(initialData)              //In this place we will use useState because when we use localeStorage in any place we will not write useState(the localeStorage is connected by useState)



// const updateLocaleStorage = (newData) => {
//   localStorage.setItem(key, JSON.stringify(newData))
//   setData(newData)
// }
// return [data, updateLocaleStorage]
// }


// import { useState } from "react";

// export function useLocaleStorage(key, initialData) {
// const[data, setData] = useState(initialData)              

// localStorage.setItem(key, JSON.stringify(initialData))   

// const updateLocaleStorage = (newData) => {
//   localStorage.setItem(key, JSON.stringify(newData))
//   setData(newData)                                    //the component is re render that is why in localeStorage [1,2,3] the initialData//the initiall value(  localStorage.setItem(key, JSON.stringify(initialData)) )
// }
// return [data, updateLocaleStorage]
// }


// import { useEffect, useState } from "react";

// export function useLocaleStorage(key, initialData) {       //  this is the key parameter
// const[data, setData] = useState(initialData)              //Note: initialData is only used on the first render

// const existingData = JSON.parse(localStorage.getItem(key))      //here we get data from local storage(over ride initial data)

// useEffect(() => {                            //if there is existingData then there is no need to set anyThing in local Storage
//   if(existingData) {
//     setData(existingData)
//   } else {
//     localStorage.setItem(key, JSON.stringify(initialData))
//   }
// }, [])
  

// const updateLocaleStorage = (newData) => {                //we will set in local Storage when this function is call
//   localStorage.setItem(key, JSON.stringify(newData))
//   setData(newData)                                  
// }
// return [data, updateLocaleStorage]
// }


//second method


import { useEffect, useState } from "react";

export function useLocaleStorage(key, initialData) {       
const[data, setData] = useState(initialData)              

const existingData = JSON.parse(localStorage.getItem(key))      

useEffect(() => {                            
  if(existingData) {
    setData(existingData)
  } else {
    localStorage.setItem(key, JSON.stringify(initialData))
  }
}, [])
  

const updateLocaleStorage = (newData) => {  
  if(typeof newData === 'function') {
 // localStorage.setItem(key, JSON.stringify(newData()))   //if newData empty it gives us undefined
    localStorage.setItem(key, JSON.stringify(newData(data)))
  }else{
    localStorage.setItem(key, JSON.stringify(newData))
  }           
  
  setData(newData)                                  
}
return [data, updateLocaleStorage]
}