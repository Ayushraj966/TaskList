import React, { useState } from 'react'

export default function TaskForm({addTask}) {

    const [task, setTask] = useState('');
    const [category, setCategory] = useState('General');
    const [priority, setPriority] = useState('Medium');


    const handleSubmit = (e) => {
        e.preventDefault();

        addTask({text: task + " ", category, priority, completed: false});

        //// reset 
        setTask('');
        setCategory('General');
        setPriority('Medium');
    }

  return (
    <div>
        {/* <h1>TaskForm</h1> */}
        <form onSubmit={handleSubmit} className='task-form'>

            <div id='inp'>
                <input type="text" placeholder="Enter the Task..."  value={task} onChange={(e)=> setTask(e.target.value)}/>
                <button type='submit'>Add Task</button>
            </div>

            <div id='btns'>
                <select value={category} onChange={(e)=> setCategory(e.target.value)} name="Type" id="">
                    <option value="General">General</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>

                <select value={priority} onChange={(e)=> setPriority(e.target.value)} name="Priority" id="">
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Low">Low</option>
                </select>
            </div>
        </form>
        <h3>{task} {category} {priority}</h3>
    </div>
  )
}
