import { useEffect, useState } from 'react'

//Components
import ProgressTracker from './Component/ProgressTracker';
import TaskForm from './Component/TaskForm';
import TaskList from './Component/TaskList';

// import './App.css'

function App() {
  const [tasks, setTask] = useState([]);

  const addTask = (task) => {
    setTask([...tasks, task])
  }

  useEffect(()=> {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  const updateTask = (updatedTask , index) => {
    const newTask = [...tasks];    ////copy tasks
    newTask[index] = updatedTask;  ////update at that index
    setTask(newTask);              ///set task
  }

  const deleteTask = () => {

  }








 return(
  <div>
    <h1>Task Focus</h1>
    <p>Our Friendly Task Manager</p>


    <TaskForm addTask = {addTask}/>
    <TaskList tasks = {tasks} updateTask = {updateTask} deleteTask = {deleteTask}/>
    <ProgressTracker/>

    <button onClick={(e) => {localStorage.clear()}}>Clear All</button>


  </div>
 )
}

export default App;
