

import { useState, useEffect, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const timer=useRef(null)
  function start(){
    if(timer.current!==null)return;
    timer.current=setInterval(()=>{
      setCount((prev)=>prev+1)
    },1000)
  }
  function stop(){
    clearInterval(timer.current)
    timer.current=null
  }
  useEffect(()=>{clearInterval(timer.current)
    console.log("hello")
  },[])
   
  return <div><button onClick={start}>Increment</button>
  couunt{count}
  <button onClick={stop}>Increment</button>
  </div>
}
export default Counter

import React, { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState(""); // input ke liye
  const [todos, setTodos] = useState([]); // list of tasks

  // Add task
  const addTodo = (e) => {
    e.preventDefault();

    if (task.trim() === "") return; // empty task add mat karo

    setTodos([...todos, task]); // purani tasks + new task
    setTask(""); // input clear
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple Todo App</h2>

      {/* Input and Button */}
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {/* Todo List */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;