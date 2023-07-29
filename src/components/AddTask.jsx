import Button from "./Button";
import { useState } from "react";
import "./AddTask.css";

const AddTask = ({ handleTaskAdd }) => {
  const [inputData, setInputData] = useState("");

  function handleTaskAddClick() {
    handleTaskAdd(inputData);
    setInputData("");
  }

  return (
    <section className="section-add-task">
      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <Button onClick={handleTaskAddClick} value="Adicionar" />
    </section>
  );
};

export default AddTask;
