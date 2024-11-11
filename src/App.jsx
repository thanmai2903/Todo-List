import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const AddTodo = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput(" ");
    }
  };
  const DeleteTodo = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  return (
    <div>
      <PostComponent
        tasks={tasks}
        setTaskInput={setTaskInput}
        taskInput={taskInput}
        AddTodo={AddTodo}
        DeleteTodo={DeleteTodo}
      />
    </div>
  );
}
function PostComponent({
  tasks,
  setTaskInput,
  taskInput,
  AddTodo,
  DeleteTodo,
}) {
  return (
    <div style={{ textAlign: "center", margin: 30 }}>
      <input
        style={{ padding: 12, fontSize: 15 }}
        type="text"
        placeholder="Add a new Todo"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button
        style={{ marginLeft: 10, padding: 12, fontSize: 15 }}
        onClick={AddTodo}
      >
        Add Todo!
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              style={{ marginLeft: 10, padding: 12, fontSize: 15 }}
              onClick={() => DeleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
