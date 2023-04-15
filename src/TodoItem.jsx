export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <div className="item">
            <input
                type="checkbox"
                checked={completed}
                onChange={e => toggleTodo(id, e.target.checked)}
            />
            <li>{title}</li>
            <button
                onClick={() => deleteTodo(id)}
            >Delete</button>
        </div>
    );
}