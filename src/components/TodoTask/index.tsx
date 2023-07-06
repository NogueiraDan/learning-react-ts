import "./task.scss"
import { Task} from "../../Types/Types";

type TypeProps = {
    task: Task,
    deleteTask(taskID: number): void
}

export default function TodoTask({task, deleteTask}:TypeProps) {
  return (
    <div className="card">
      <div>
        {task.name}
      </div>

      <div className="line2">
        <span className="btn-card" onClick={()=>deleteTask(task.id)}>X</span>
      </div>
    </div>
  );
}
