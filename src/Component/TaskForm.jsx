import React from 'react'
let task;

export default function TaskForm() {
  return (
    <div>
        {/* <h1>TaskForm</h1> */}
        <form>
            <div>
                <input type="text" placeholder="Enter the Task." value={task} />
                <button type='submit'>Add Task</button>
            </div>

            <div>
                <select name="Priority" id="">
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="low">Low</option>
                </select>
                
                <select name="Type" id="">
                    <option value="general">General</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                </select>
            </div>

        </form>
    </div>
  )
}
