import { useState } from "react";
import { TodoForm } from "./TodoForm";
import "./style.css";

export default function App() {
    const [newItem, setNewItem] = useState("");
    const [todos, setTodos] = useState([]);

    function addTodo(title) {
        setTodos((currentTodos) => {
            return [
                ...currentTodos,
                {
                    id: crypto.randomUUID(),
                    title,
                    completed: false
                },
            ];
        });
    }

    function toggleTodo(id, completed) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo, completed
                    };
                }
                return todo;
            });
        });
    };

    function deleteTodos(id) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id);
        });
    }

    return (
        <>
            <div className="todo">
                <TodoForm onSubmit={addTodo} />

                <div className="todo-list">
                    <h1>Todo List</h1>
                    <ul>
                        {todos.length === 0 && <span>No tasks yet</span>}
                        {todos.map(todo => {
                            return (
                                <div className="item" key={todo.id}>
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={e => toggleTodo(todo.id, e.target.checked)}
                                    />
                                    <li>{todo.title}</li>
                                    <button onClick={() => deleteTodos(todo.id)}>Delete</button>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}