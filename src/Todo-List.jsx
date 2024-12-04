import { useState } from "react";

function TodoList() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleAddTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function handleRemoveTask(index) {
    const upDatedTask = task.filter((_, i) => i !== index);
    setTask(upDatedTask);
  }
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function handleMoveUp(index) {
    if (index > 0) {
      const upDatedTasks = [...task];
      [upDatedTasks[index], upDatedTasks[index - 1]] = [
        upDatedTasks[index - 1],
        upDatedTasks[index],
      ];
      setTask(upDatedTasks);
    }
  }
  function handleMoveDown(index) {
    if (index < task.length - 1) {
      const upDatedTasks = [...task];
      [upDatedTasks[index], upDatedTasks[index + 1]] = [
        upDatedTasks[index + 1],
        upDatedTasks[index],
      ];
      setTask(upDatedTasks);
    }
  }

  return (
    <div className="Todolist">
      <h1>TO-DO-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={handleAddTask}>
          Add
        </button>
      </div>
      <ol>
        {task.map((tasks, index) => (
          <li key={index}>
            <span className="text">
              {tasks}
              <button
                onClick={() => handleRemoveTask(index)}
                className="delete-btn"
              >
                Delete
              </button>
              <button onClick={() => handleMoveUp(index)} className="move-up">
                ☝️
              </button>
              <button
                onClick={() => handleMoveDown(index)}
                className="move-down"
              >
                👇
              </button>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default TodoList;
