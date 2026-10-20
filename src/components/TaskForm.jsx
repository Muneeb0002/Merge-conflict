
import { useState } from "react";
import "./TaskForm.css";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      alert("Task title is required.");
      return;
    }

    if (trimmedTitle.length < 5) {
      alert("Task title must be at least 5 characters long.");
      return;
    }

    if (trimmedTitle.length > 50) {
      alert("Task title cannot exceed 50 characters.");
      return;
    }

    onAddTask({
      id: Date.now(),
      title: trimmedTitle,
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
        onChange={(event) => setTitle(event.target.value)}
        minLength={5}
        maxLength={50}
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
