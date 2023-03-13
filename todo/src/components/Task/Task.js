import React from 'react'
import './Task.css'

function Task({ tasks, removeTask }) {
  return (
    <div className='task'>
      <div className='in-task'>
      <h1>{tasks.title}</h1>
      <button className='btn-remove' onClick={removeTask}>Удалить</button>
      </div>
      <hr />
    </div>
  )
}

export default Task