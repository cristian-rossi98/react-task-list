import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import Alert from "./components/Alert";

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

export default function App() {
  const [tasks, setTasks] = useState(taskObject);
  const [alert, setAlert] = useState("");

  function handleTaskAdd(inputData) {
    if (!inputData.trim()) {
      setAlert(<Alert value="Preencha o campo com o nome da tarefa" />); 
      return;
    } else {
      setAlert('');
    }

    const newTask = {
      id: uuidv4(),
      name: inputData,
      done: false,
    };
    setTasks([...tasks, newTask]);
  }

  function handleTaskUpdate(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) return {...task, done: !task.done};
      return task
    })
    setTasks(newTask);
  }

  return (
    <main>
      <Header />
      <AddTask handleTaskAdd={handleTaskAdd} />
      {alert}
      <Tasks tasks={tasks} handleTaskUpdate={handleTaskUpdate} />
    </main>
  );
}
