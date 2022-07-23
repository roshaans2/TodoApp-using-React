import React from "react";
import {useState} from "react"
import TodoItem from "./components/TodoItem";

const App = () => {

  const [inputText,setinputText] = useState("")
  const [items,setItems] = useState([])  

  const handleChange = (event) => {
    const newValue = event.target.value
    setinputText(newValue)
  }

  const addItem = () =>{
    setItems((prevItems)=>{
       return [...prevItems,inputText]
    })
    setinputText("")
  }

  const deleteItem = (id)=>{
     setItems((prevItems)=>{
        return prevItems.filter((item,index)=>{
          return index !== id

        })
     })
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem,index)=><TodoItem key={index} id={index} text={todoItem} onChecked={deleteItem}/>)}
        </ul>
      </div>
    </div>
  );
}

export default App;



