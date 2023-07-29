import Task from "./Task";

const Tasks = ({ tasks, handleTaskUpdate, handleTaskDelete }) => {
  return (
    <section className="section-list-tasks">
      {tasks.map((task) => (
        <Task
          handleTaskClick={() => handleTaskUpdate(task.id)}
          handleRemoveClick={() => handleTaskDelete(task.id)}
          key={task.id}
          task={task}
        />
      ))}
    </section>
  );
};

export default Tasks;
