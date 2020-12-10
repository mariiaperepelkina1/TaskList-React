import React, { useState } from "react"; 
import "./App.css";
import "./components/ListItem.js"; 
import TaskList from "./components/TaskList"; 
import Context from "./Context";


function App() {
  const [tasks, setTasks] = useState([
    {id: 1, done: false, title: "To learn JavaScript"}, 
    {id: 2, done: false, title: "To learn React"}, 
    {id: 3, done: false, title: "To learn smth else"}, 
  ])

  const toggleTask = (id) => {
    setTasks(tasks.map( task => {
      if(task.id === id) {
        task.done = !task.done; 
      }
      return task; 
    }))
  }

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const addTask = (title) => {
    setTasks(tasks.concat([{
      id: Date.now(),
      title: title, 
      done: false
    }]))
  }

  return (
    <Context.Provider value={ {removeTask} }>
      <div className="App">
        {tasks.length ? <TaskList tasks={tasks} onToggle={toggleTask} addTask={addTask}/> : <p className="wrapper">No tasks!</p>}
        
      </div>
    </Context.Provider>
  );
}

export default App;
