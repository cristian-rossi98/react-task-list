import "./Task.css";

const Task = ({ task, handleTaskClick }) => {
  return (
    <div onClick={() => handleTaskClick(task.id)}>
      <div
        className="task"
        style={task.done ? { borderLeft: "7.5px solid #5e5ee3" } : {}}
      >
        {<p>{task.name}</p>}
      </div>
    </div>
  );
};

export default Task;
