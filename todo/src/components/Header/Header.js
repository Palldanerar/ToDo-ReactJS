import React from 'react'
import "./Header.css"

function Header({task, setTask, newTask}) {
  return (
    <div className="header">
        <input type="text" value={task} onChange={e => setTask(e.target.value)} className="inputTask"/>
        <button onClick={newTask} className="btn">Новое Задание</button>
    </div>
  )
}

export default Header