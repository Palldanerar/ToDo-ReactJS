import React from 'react'

function Header({task, setTask, newTask}) {
  return (
    <div>
        <input type="text" value={task} onChange={e => setTask(e.target.value)} />
        <button onClick={newTask}>Новое Задание</button>
    </div>
  )
}

export default Header