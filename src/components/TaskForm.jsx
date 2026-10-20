
import { useState } from "react";
import "./TaskForm.css";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) {
      alert("Please enter a task title.");
      return;
    }

    onAddTask({
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    });

    setTitle("");
    setDescription("");
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
      />

      <label htmlFor="description">Task Description</label>
      <textarea
        id="description"
        placeholder="Describe your task"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        rows={4}
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
