import { useState } from "react";

export function TodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "")
      return;

    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="todo-text">
        <label htmlFor="labelArea">New Task</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
        />
        <button>add task</button>
      </div>
    </form>
  );
};