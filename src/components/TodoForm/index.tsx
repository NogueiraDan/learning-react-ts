import { useState } from "react";
import "./form.scss"
import TodoTask from "../TodoTask";
import { Task } from "../../Types/Types";

export default function TodoForm() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState<Task[]>([]);

  function handleSubmit() {
    if (!task) {
      alert("Digite alguma coisa!");
      return;
    }

    const randomID = (num: Number) => Math.floor(Math.random() * 999999);
    const newTask = {
      id: randomID(999),
      name: task,
    };
    setTodoList([...todoList, newTask]);
    console.log(todoList);
    setTask("");
  }

  function handleDelete(taskID: number) {
    setTodoList(todoList.filter((task) => task.id !== taskID));
  }

  return (
    <div className="formWrapper">
      <header className="header">
        <h2>Lists</h2>

        <input
          type="text"
          autoComplete="off"
          placeholder="Escrever task..."
          name="task"
          className="input"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />

        <button onClick={handleSubmit} className="btn-header">
          Adicionar Task
        </button>
      </header>

      <div className="line"></div>

      {todoList.map((task, key) => (
        <TodoTask task={task} key={key} deleteTask={handleDelete} />
      ))}
    </div>
  );
}
