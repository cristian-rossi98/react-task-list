import Task from "./Task";

const Tasks = ({ tasks, handleTaskUpdate }) => {
  return (
    <section className="section-list-tasks">
      {tasks.map((task) => (
        <Task handleTaskClick={() => handleTaskUpdate(task.id)} key={task.id} task={task} />
      ))}
    </section>
  );
};

export default Tasks;
