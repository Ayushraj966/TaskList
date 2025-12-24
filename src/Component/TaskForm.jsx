import React, { useState } from 'react'

export default function TaskForm({addTask}) {

    const [task, setTask] = useState('');
    const [category, setCategory] = useState('Medium');
    const [priority, setPriority] = useState('General');


    const handleSubmit = (e) => {
        e.preventDefault();

        addTask({text: task, category, priority, completed: false});

        //// reset 
        setTask('');
        setCategory('Medium');
        setPriority('General');
    }

  return (
    <div>
        {/* <h1>TaskForm</h1> */}
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder="Enter the Task..." onChange={(e)=> setTask(e.target.value)}/>
                <button type='submit'>Add Task</button>
            </div>

            <div>
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

        <h1>{task} {category} {priority}</h1>
        </form>
    </div>
  )
}
