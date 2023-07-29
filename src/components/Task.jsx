import "./Task.css";
import { CiCircleRemove, CiCircleInfo } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Task = ({ task, handleTaskClick, handleRemoveClick }) => {
  const navigate = useNavigate();

  function handleTaskInfo() {
    const taskString = JSON.stringify(task);
    navigate(`/${encodeURIComponent(taskString)}`);
    // console.log(JSON.stringify(task));
  }

  return (
    <div
      className="task"
      style={task.done ? { borderLeft: "7.5px solid #5e5ee3" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {<p>{task.name}</p>}
      </div>
      <div className="icons">
        <CiCircleInfo className="icon" onClick={handleTaskInfo} />
        <CiCircleRemove
          className="icon"
          onClick={() => handleRemoveClick(task.id)}
        />
      </div>
    </div>
  );
};

export default Task;
