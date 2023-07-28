import "./App.css";

const tasks = [
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

const AddTask = () => {
  return (
    <section className="section-add-task">
      <input type="text" name="task-input" id="task-input" />
      <Button value="Adicionar" />
    </section>
  );
};

const Button = ({ value }) => {
  return (
    <>
      <button>{value}</button>
    </>
  );
};

const ListTasks = ({ tasks }) => {
  const taskList = tasks.map((task) => <Task key={task.id} task={task} />);

  return <section className="section-list-tasks">{taskList}</section>;
};

const Task = ({ task }) => {
  return (
    <div className="task">
      <p>{task.name}</p>
    </div>
  );
};

export default function App() {
  return (
    <main>
      <h1>Minhas Tarefas</h1>
      <AddTask />
      <ListTasks tasks={tasks} />
    </main>
  );
}
