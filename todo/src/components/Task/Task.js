import React from 'react'
import './Task.css'

function Task({ tasks }) {
  return (
    <div className='task'>
      <h1>{tasks.title}</h1>
      <hr />
    </div>
  )
}

export default Task