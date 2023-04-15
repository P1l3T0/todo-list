import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import "./style.css";

export default function App() {
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("ITEM");

        if (localValue === null)
            return [];

        return JSON.parse(localValue);
    });

    useEffect(() => {
        localStorage.setItem("ITEM", JSON.stringify(todos));
    }, [todos]);

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

    function deleteTodo(id) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id);
        });
    }

    return (
        <>
            <div className="todo">
                <TodoForm onSubmit={addTodo} />
                <TodoList
                    todos={todos}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            </div>
        </>
    );
}