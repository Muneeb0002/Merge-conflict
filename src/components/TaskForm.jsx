
import { useState } from "react";
import "./TaskForm.css";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a task title");
      return;
    }

    onAddTask({
      id: Date.now(),
      title: title.trim(),
    });

    setTitle("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Create Task</h2>

      <label htmlFor="title">Task Title</label>
      <input
        id="title"
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
