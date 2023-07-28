import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

const taskObject = [
  {
    id: 1,
    name: "Estudar para prova",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    done: false,
  },
  {
    id: 2,
    name: "Dormir",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    done: true,
  },
];

const AddTask = ({ tasks, setTasks }) => {
  const [taskInput, setTaskInput] = useState("");

  function handleClick() {
    const newTask = {
      id: uuidv4(),
      name: taskInput,
      done: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput("");
  }

  return (
    <section className="section-add-task">
      <input
        type="text"
        name="task-input"
        id="task-input"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <Button onClick={handleClick} value="Adicionar" />
    </section>
  );
};

const Button = ({ value, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{value}</button>
    </>
  );
};

const ListTasks = ({ tasks, setTasks }) => {
  const taskList = tasks.map((task) => (
    <Task key={task.id} task={task} setTasks={setTasks} />
  ));

  return <section className="section-list-tasks">{taskList}</section>;
};

const Task = ({ task, setTasks }) => {
  function handleClick() {
    // setTasks(task.id, { ...task, done: !task.done });
  }

  const taskDone = task.done ? (
    <div className="task" style={{ borderLeft: "7.5px solid #5e5ee3" }}>
      <p>{task.name}</p>
    </div>
  ) : (
    <div className="task">
      <p>{task.name}</p>
    </div>
  );

  return <div onClick={handleClick}>{taskDone}</div>;
};

export default function App() {
  const [tasks, setTasks] = useState(taskObject);

  return (
    <main>
      <h1>Minhas Tarefas</h1>
      <AddTask tasks={tasks} setTasks={setTasks} />
      <ListTasks tasks={tasks} setTasks={setTasks} />
    </main>
  );
}
