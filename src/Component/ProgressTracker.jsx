import React from 'react'

export default function ProgressTracker({tasks}) {
  const completedTask = tasks.filter((task) => task.completed).length;
  const totalTask = tasks.length;  
  const precentageComplete = totalTask === 0 ? 0 : (completedTask / totalTask) * 100;

  return (
    <div className='progress-tracker'>
        <p>{completedTask} out of {totalTask} Tasks Completed</p>
        <div className='progress-bar'>
              <div className='progress' style = {{width: `${precentageComplete}%`}}>
              </div>
        </div>
    </div>
  )
}
