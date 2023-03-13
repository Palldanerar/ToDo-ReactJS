import React from "react";
import "./App.css";
import Task from "./components/Task/Task";
import Header from "./components/Header/Header";

function App() {
  const [tasks, setTasks] = React.useState([]);
  const [task, setTask] = React.useState("");

  const newTask = () => {
    if (!task) return;
    setTasks((prev) => [...tasks, { id: `${prev.length + 1}`, title: task }]);
    setTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((task, id) => id !== index));
  };

  return (
    <div className="App">
      <Header
        task={task}
        setTask={setTask}
        newTask={newTask}
      />
      {tasks.map((task, index) => {
        return (
          <Task
            removeTask={() => removeTask(index)}
            key={task.id}
            tasks={task}
          />
        );
      })}
    </div>
  );
}

export default App;
