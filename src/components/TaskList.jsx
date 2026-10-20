
function TaskList({ tasks }) {
  return (
    <section className="task-list">
      <h2>My Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <article key={task.id} className="task-item">
            <h3>{task.title}</h3>
          </article>
        ))
      )}
    </section>
  );
}

export default TaskList;
