import Button from "./Button";
import "./TaskDetails.css";
import { useNavigate, useParams } from "react-router-dom";

const TaskDetails = () => {
  const params = useParams();
  const task = JSON.parse(decodeURIComponent(params.task));
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <section className="section-task-details">
      <Button onClick={handleBack} value="Voltar" />
      <div className="task-details">
        <h1>{task.name}</h1>
        <p>{task.description}</p>
        {console.log(task)}
      </div>
    </section>
  );
};

export default TaskDetails;
