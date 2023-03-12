import React from 'react';
import './App.css';
import Task from './Task';

function App() {

  const [tasks, setTasks] = React.useState([])
  const [task, setTask] = React.useState("")

  const newTask = () => {
    setTasks([...tasks, {title: task}])
    setTask("")
  }

  return (
    <div className="App">
      <input type="text" value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={newTask}>Новое Задание</button>

      {
        tasks.map(task => {
          return <Task tasks={task} />
        })
      }
    </div>
  );
}

export default App;
