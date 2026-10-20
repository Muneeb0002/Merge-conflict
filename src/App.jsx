
import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(task) {
    setTasks((previousTasks) => [...previousTasks, task]);
  }

  return (
    <main>
      <h1>TaskFlow</h1>
      <p>Manage your daily tasks</p>

      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </main>
  );
}

export default App;
