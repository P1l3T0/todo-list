import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <ul>
                {todos.length === 0 && <span>No tasks yet</span>}
                {todos.map(todo => {
                    return (
                        <TodoItem
                            {...todo}
                            key={todo.id}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
                        />
                    );
                })}
            </ul>
        </div>
    );
}