import { useState } from 'react'

//Components
import ProgressTracker from './Component/ProgressTracker';
import TaskForm from './Component/TaskForm';
import TaskList from './Component/TaskList';

// import './App.css'

function App() {
 return(
  <div>
    <h1>Task Focus</h1>
    <p>Our Friendly Task Manager</p>


    <TaskForm/>
    <ProgressTracker/>
    <TaskList/>

    <button>Clear All</button>
  </div>
 )
}

export default App;
